import { useEffect, useMemo, useState } from "react";
import { usersApi } from "../../../api/resources";

const initialForm = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  role: "",
  status: "active",
};

const InputField = ({ label, ...props }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

const NewUser = () => {
  const [form, setForm] = useState(initialForm);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await usersApi.list();
      setUsers(data);
    } catch {
      setError("Unable to load users. Ensure API is running on port 4000.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const fullNamePreview = useMemo(
    () => `${form.firstName} ${form.lastName}`.trim(),
    [form.firstName, form.lastName]
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) return;

    try {
      setBusyId("create");
      const payload = {
        name: fullNamePreview,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        company: form.company.trim(),
        email: form.email.trim().toLowerCase(),
        role: form.role.trim() || "Talent",
        status: form.status,
        createdAt: new Date().toISOString(),
      };
      await usersApi.create(payload);
      setForm(initialForm);
      await loadUsers();
    } catch {
      setError("Unable to create user.");
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (id) => {
    try {
      setBusyId(id);
      await usersApi.remove(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch {
      setError("Unable to delete user.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="w-full p-4 md:p-8">
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">Create User</h2>
        <p className="mb-6 text-sm text-gray-500">Create and manage recruiters/talent users.</p>
        <form onSubmit={handleCreate} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InputField
            label="First name"
            value={form.firstName}
            onChange={(event) => handleChange("firstName", event.target.value)}
            placeholder="eg. Malik"
          />
          <InputField
            label="Last name"
            value={form.lastName}
            onChange={(event) => handleChange("lastName", event.target.value)}
            placeholder="eg. Ali"
          />
          <InputField
            label="Company"
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
            placeholder="eg. TeamUXD"
          />
          <InputField
            label="Email Address"
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="eg. team@gmail.com"
          />
          <InputField
            label="Role"
            value={form.role}
            onChange={(event) => handleChange("role", event.target.value)}
            placeholder="eg. HR Manager"
          />
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              value={form.status}
              onChange={(event) => handleChange("status", event.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <button
              type="submit"
              disabled={busyId === "create"}
              className="rounded-lg bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700 disabled:opacity-60"
            >
              {busyId === "create" ? "Saving..." : "Create User"}
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Users</h3>
          <button
            type="button"
            onClick={loadUsers}
            className="rounded-md border px-3 py-1 text-sm text-gray-700"
          >
            Refresh
          </button>
        </div>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        {loading ? (
          <p className="text-sm text-gray-500">Loading users...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Role</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-3 py-2">{user.name || `${user.firstName} ${user.lastName}`}</td>
                    <td className="px-3 py-2">{user.email}</td>
                    <td className="px-3 py-2">{user.role || "-"}</td>
                    <td className="px-3 py-2 capitalize">{user.status || "active"}</td>
                    <td className="px-3 py-2">
                      <button
                        type="button"
                        disabled={busyId === user.id}
                        onClick={() => handleDelete(user.id)}
                        className="rounded bg-red-500 px-2 py-1 text-white disabled:opacity-60"
                      >
                        {busyId === user.id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
                {!users.length && (
                  <tr>
                    <td className="px-3 py-4 text-gray-500" colSpan={5}>
                      No users created yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewUser;
