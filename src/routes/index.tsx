import { Routes, Route } from "react-router-dom";
import Registro from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
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
