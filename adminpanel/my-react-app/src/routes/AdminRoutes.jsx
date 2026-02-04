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

        <Route index element={<Dashboard />} />

        {(role === "admin" || role === "vendor") && (
          <Route path="books" element={<Books />} />
        )}

        {role === "admin" && (
          <Route path="users" element={<Users />} />
        )}

        {role === "admin" && (
          <Route path="payments" element={<PaymentHistory />} />
        )}

        <Route path="add-author" element={<AddAuthor />} />

        <Route path="*" element={<Navigate to="/" />} />
       


      </Route>
    </Routes>
  );
}
