import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-blue-600 hover:text-white";

  return (
    <div className="w-64 bg-black shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Admin Panel
      </h2>

      <div className="space-y-2">

        <div className="text-black bg-amber-50">
          
          <NavLink to="" end className={linkClass}>
            Dashboard
          </NavLink>
        </div>

        <div className="text-black bg-amber-50">
          <NavLink to="books" className={linkClass}>
            Books
          </NavLink>
        </div>

        <div className="text-black bg-amber-50">
          <NavLink to="users" className={linkClass}>
            Users List
          </NavLink>
        </div>

        <div className="text-black bg-amber-50">
          <NavLink to="payments" className={linkClass}>
            Payment History
          </NavLink>
        </div>
         <div className="text-black bg-amber-50">
          <NavLink to="add-author" className={linkClass}>
            Add Author
          </NavLink>
        </div>

      </div>
    </div>
  );
}
