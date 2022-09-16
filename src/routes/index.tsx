import { Routes, Route } from "react-router-dom";
import Registro from "../Pages/Register";
import DashBoard from "../Pages/DashBoard";
import Login from "../Pages/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashBoard />}>
        </Route>
      </Route>
    </Routes>
  );
}

export default RoutesMain;
