/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UseContext";

function ProtectedRoutes() {
  const { user } = useContext(UserContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate("/");
    }
  }, []);

  return <>{user && <Outlet />}</>;
}

export default ProtectedRoutes;
