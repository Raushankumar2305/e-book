import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/auth/users");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    await fetch(`http://localhost:8000/auth/users/${id}`, {
      method: "DELETE",
    });

   
    fetchUsers();
  };

  const handleEdit = (user) => {
    alert(
      `Edit user:\n\nName: ${user.name}\nEmail: ${user.email}\n\n(Edit modal comes next )`
    );
  };

  if (loading) {
    return <p className="text-center mt-10">Loading users...</p>;
  }

  return (

   

    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Users</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-center">Verified</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50`}
              >
                <td className="px-6 py-4 border-b">{user.id}</td>
                <td className="px-6 py-4 border-b">{user.name}</td>
                <td className="px-6 py-4 border-b">{user.email}</td>
                <td className="px-6 py-4 border-b text-center">
                  {user.is_verified ? (
                    <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                      Yes
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                      No
                    </span>
                  )}
                </td>

                {/* action buttom */}
                <td className="px-6 py-4 border-b text-center space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-800"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No users found
          </div>
        )}
      </div>
    </div>
    
  );
}
