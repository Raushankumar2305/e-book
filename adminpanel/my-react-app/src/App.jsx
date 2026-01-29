import { BrowserRouter, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import AdminRoutes from "./routes/AdminRoutes";

function TokenHandler() {
  const [params] = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    const role = params.get("role");

   
    if (token && role) {
      
      localStorage.clear();

     
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      
      window.history.replaceState({}, "", "/admin");
    }
  }, []);
  

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
