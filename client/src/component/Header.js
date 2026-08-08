import React from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header-right">
        <FontAwesomeIcon icon={faBell} className="header-icon" />

        <div className="profile">
          <FontAwesomeIcon icon={faCircleUser} className="profile-icon" />

          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
