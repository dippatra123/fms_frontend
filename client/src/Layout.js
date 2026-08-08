import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./component/Sidenav";
import Header from "./component/Header";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />

        <div
          style={{
            flex: 1,
            marginLeft: isOpen ? "210px" : "80px",
            padding: "5px",
            transition: "margin-left 0.3s ease",
            background: "#ecebe5",
            minHeight: "100vh",
            overflowY: "auto",
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
