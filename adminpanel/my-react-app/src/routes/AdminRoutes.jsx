import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../components/Dashboard";
import Books from "../components/Books";
import Users from "../components/user";
import PaymentHistory from "../components/PaymentHistory";
import AddAuthor from "../components/AddAuthor";

export default function AdminRoutes() {
  const role = localStorage.getItem("role");

  return (
    <Routes>
      <Route element={<AdminLayout />}>

        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Books = admin + vendor */}
        {(role === "admin" || role === "vendor") && (
          <Route path="books" element={<Books />} />
        )}

        {/* Users = admin only */}
        {role === "admin" && (
          <Route path="users" element={<Users />} />
        )}

        {/* Payments = admin only */}
        {role === "admin" && (
          <Route path="payments" element={<PaymentHistory />} />
        )}

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="add-author" element={<AddAuthor />} />


        {role === "vendor" && (
          <NavLink to="/admin/add-author" className={linkClass}>
            Add Author
          </NavLink>
        )}




      </Route>
    </Routes>
  );
}
