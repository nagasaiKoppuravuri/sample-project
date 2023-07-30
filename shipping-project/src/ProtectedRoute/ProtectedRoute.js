import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoute(instance) {
  const isAuth = localStorage.getItem('username')
  return isAuth !== null ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
