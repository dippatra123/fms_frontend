import React, { useState } from "react";
import "./sidenav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faHouse,
  faBox,
  faUsers,
  faUserTie,
  faTruck,
  faGear,
  faAddressCard,
  faFileLines,
  faMoneyBillTransfer,
  faCoins,
  faUserPlus,
  faListCheck,
  faRightLeft,
  faHandHoldingDollar,
  faCreditCard,
  faRightFromBracket,
  faReceipt,
  faHandshake,
  faChartLine,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const menuData = [
  {
    title: "Post Transaction",
    icon: faHouse,
    path: "/",
  },
  {
    title: "Accounts",
    key: "accounts",
    icon: faBox,
    children: [
      {
        title: "Account Summary",
        icon: faChartLine,
        path: "/acc-summary",
      },
      {
        title: "Account Details",
        icon: faAddressCard,
        path: "/acc-details",
      },
      {
        title: "Statements",
        icon: faFileLines,
        path: "/statement",
      },
      {
        title: "Transactions",
        icon: faMoneyBillTransfer,
        path: "/tranction",
      },
    ],
  },
  {
    title: "Members",
    key: "members",
    icon: faUsers,
    children: [
      {
        title: "Member Summary",
        icon: faIdCard,
        path: "/member-summary",
      },
      {
        title: "Contribution History",
        icon: faCoins,
        path: "/contribution-histroy",
      },
      {
        title: "Payment History",
        icon: faReceipt,
        path: "/Payment-histroy",
      },
    ],
  },
  {
    title: "Employees",
    key: "employees",
    icon: faUserTie,
    children: [
      {
        title: "New Employee",
        icon: faUserPlus,
        path: "/New-emp",
      },
    ],
  },
  {
    title: "Vendors",
    key: "vendors",
    icon: faTruck,
    children: [
      {
        title: "New Vendor",
        icon: faHandshake,
        path: "/New-ven",
      },
    ],
  },
  {
    title: "XXYY",
    key: "xxyy",
    icon: faGear,
    children: [
      {
        title: "My Task",
        icon: faListCheck,
        path: "/my-task",
      },
      {
        title: "My Transaction",
        icon: faRightLeft,
        path: "/my-tranaction",
      },
      {
        title: "My Contribution",
        icon: faHandHoldingDollar,
        path: "/my-contribution",
      },
      {
        title: "My Payment",
        icon: faCreditCard,
        path: "/my-payment",
      },
    ],
  },
];

const Sidenav = ({ isOpen, setIsOpen }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = (key) => {
    if (!isOpen) return;

    setActiveMenu((prev) => (prev === key ? "" : key));
  };

  return (
    <aside className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header">
        {isOpen && <h5>Roy Soft</h5>}

        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
        </button>
      </div>

      {/* Menu */}
      <div className="sidebar-main">
        <ul className="menu">
          {menuData.map((menu) => (
            <li key={menu.title}>
              {menu.path ? (
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    isActive ? "menu-item active" : "menu-item"
                  }
                >
                  <div className="menu-left">
                    <FontAwesomeIcon icon={menu.icon} />
                    {isOpen && <span>{menu.title}</span>}
                  </div>
                </NavLink>
              ) : (
                <>
                  <div
                    className="menu-item"
                    onClick={() => toggleMenu(menu.key)}
                  >
                    <div className="menu-left">
                      <FontAwesomeIcon icon={menu.icon} />
                      {isOpen && <span>{menu.title}</span>}
                    </div>

                    {isOpen && (
                      <FontAwesomeIcon
                        icon={
                          activeMenu === menu.key ? faChevronUp : faChevronDown
                        }
                      />
                    )}
                  </div>

                  {isOpen && activeMenu === menu.key && (
                    <ul className="submenu">
                      {menu.children.map((sub) => (
                        <li key={sub.title}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              isActive ? "submenu-item active" : "submenu-item"
                            }
                          >
                            <FontAwesomeIcon
                              icon={sub.icon}
                              className="submenu-icon"
                            />

                            <span>{sub.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          {isOpen && <span> Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidenav;
