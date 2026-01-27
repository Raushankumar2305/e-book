export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
  
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl text-black font-semibold">
        Admin Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
}
