import { BrowserRouter, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import AdminRoutes from "./routes/AdminRoutes";

function TokenHandler() {
  const [params] = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    const role = params.get("role");


    if (token) {
      localStorage.setItem("token", token);
    }

    if (role) {
      localStorage.setItem("role", role);
    }
  }, [params]);

  return <AdminRoutes />;
}

function App() {
  return (
    <BrowserRouter>
      <TokenHandler />
    </BrowserRouter>
  );
}

export default App;
