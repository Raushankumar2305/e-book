import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  console.log("AdminLayout rendered");

  return (
    <div className="">
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  );
}
