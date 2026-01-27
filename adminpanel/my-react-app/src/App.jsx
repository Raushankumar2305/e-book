import { BrowserRouter, Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {AdminRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
