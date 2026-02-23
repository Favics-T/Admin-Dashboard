import { createContext, useEffect, useMemo, useState } from "react";
import { authUsersApi } from "../api/resources";

const AUTH_SESSION_KEY = "authUser";

const readStoredJson = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const sanitizeUser = (user) => ({
  id: user?.id,
  name: user?.name ?? "",
  email: user?.email ?? "",
  company: user?.company ?? "",
});

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => readStoredJson(AUTH_SESSION_KEY));
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(AUTH_SESSION_KEY);
    }
  }, [currentUser]);

  const register = async (payload) => {
    const nextUser = {
      name: payload?.name?.trim(),
      email: payload?.email?.trim().toLowerCase(),
      password: payload?.password,
      company: payload?.company?.trim() ?? "",
    };

    if (!nextUser.name || !nextUser.email || !nextUser.password) {
      return { ok: false, message: "Please fill in all required fields." };
    }

    try {
      setAuthLoading(true);
      const existing = await authUsersApi.findByEmail(nextUser.email);
      if (existing) {
        return { ok: false, message: "An account with this email already exists." };
      }

      const created = await authUsersApi.create(nextUser);
      const sessionUser = sanitizeUser(created);
      setCurrentUser(sessionUser);
      return { ok: true };
    } catch {
      return { ok: false, message: "Unable to register now. Make sure API server is running." };
    } finally {
      setAuthLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    const normalizedEmail = (email ?? "").trim().toLowerCase();
    try {
      setAuthLoading(true);
      const user = await authUsersApi.findByEmail(normalizedEmail);

      if (!user || user.password !== password) {
        return { ok: false, message: "Invalid email or password." };
      }

      const sessionUser = sanitizeUser(user);
      setCurrentUser(sessionUser);
      return { ok: true };
    } catch {
      return { ok: false, message: "Unable to login now. Make sure API server is running." };
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      authLoading,
      register,
      login,
      logout,
    }),
    [currentUser, authLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
