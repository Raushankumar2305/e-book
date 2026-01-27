import { Route } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../components/Dashboard";
import Books from "../components/Books";
import Users from "../components/user";
import PdfViewer from "../components/PdfViewer";
import PaymentHistory from "../components/PaymentHistory";

export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>

      <Route index element={<Dashboard />} />

      <Route path="books" element={<Books />} />

      <Route path="books/:id/pdf" element={<PdfViewer />} />

      <Route path="payments" element={<PaymentHistory />} />

      <Route path="users" element={<Users />} />

    </Route>
  );
}
