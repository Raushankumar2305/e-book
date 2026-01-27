import React, { useEffect, useState } from "react";

const AdminDashboard = () => {

  const [stats, setStats] = useState({
    total_books: 0,
    total_users: 0,
    active_users: 0,
  });

  useEffect(() => {
    fetch("http://localhost:8000/dashboard/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Total Books</h3>
        <p className="text-4xl font-bold">{stats.total_books}</p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Total Users</h3>
        <p className="text-4xl font-bold">{stats.total_users}</p>
      </div>

     

    </div>
  );
};

export default AdminDashboard;
