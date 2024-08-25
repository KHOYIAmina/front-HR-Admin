import React from "react";
import NavbarVer from "../components/navbar/navbarVer/navbarVer";
import NavbarHor from "../components/navbar/navbarHor/navbarHor";
import useTokenRefresh from "../Hooks/useTokenRefresh";

const Layout = ({ children}) => {
  useTokenRefresh();
  return (
    <div className="bg-page flex flex-col">
      <NavbarVer />
      <main className="min-h-screen flex flex-col ">
        <NavbarHor />
        {children}
      </main>
    </div>
  );
};

export default Layout;
