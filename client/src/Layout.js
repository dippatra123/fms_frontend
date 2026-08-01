import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./component/Sidenav";
import Header from "./component/Header";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />

        <div
          style={{
            flex: 1,
            marginLeft: isOpen ? "230px" : "80px",
            padding: "20px",
            transition: "margin-left 0.3s ease",
            background: "#ecebe5",
          }}
        >
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
