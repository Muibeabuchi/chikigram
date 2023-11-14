// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  let isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-1 justify-center items-center flex-col">
          <Outlet />
          <img src="" alt="" />
        </section>
      )}
    </>
  );
}
