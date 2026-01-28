import { useEffect, useState } from "react";
import api from "../api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
   console.log("Users component rendered");
   console.log("token:", localStorage.getItem("token"));
  
  const fetchUsers = async () => {
    try {
      const res = await api.get("/auth/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch users error:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await api.delete(`/auth/users/${id}`);
    fetchUsers();
  };

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Users</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Verified</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.role}</td>
                  <td className="p-3">{u.is_verified ? "Yes" : "No"}</td>

                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-6 text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
