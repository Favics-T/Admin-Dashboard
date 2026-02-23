import { createContext, useContext, useMemo, useState } from "react";

const REGISTERED_USER_KEY = "registeredUser";
const AUTH_USER_KEY = "authUser";

const readStoredJson = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const sanitizeUser = (user) => ({
  name: user?.name ?? "",
  email: user?.email ?? "",
  company: user?.company ?? "",
});

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => readStoredJson(AUTH_USER_KEY));

  const register = (payload) => {
    const nextUser = {
      name: payload?.name?.trim(),
      email: payload?.email?.trim().toLowerCase(),
      password: payload?.password,
      company: payload?.company?.trim() ?? "",
    };

    if (!nextUser.name || !nextUser.email || !nextUser.password) {
      return { ok: false, message: "Please fill in all required fields." };
    }

    localStorage.setItem(REGISTERED_USER_KEY, JSON.stringify(nextUser));
    const sessionUser = sanitizeUser(nextUser);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const storedUser = readStoredJson(REGISTERED_USER_KEY);
    const normalizedEmail = (email ?? "").trim().toLowerCase();

    if (
      !storedUser ||
      storedUser.email !== normalizedEmail ||
      storedUser.password !== password
    ) {
      return { ok: false, message: "Invalid email or password." };
    }

    const sessionUser = sanitizeUser(storedUser);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(AUTH_USER_KEY);
    setCurrentUser(null);
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      register,
      login,
      logout,
    }),
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export default AuthProvider;
