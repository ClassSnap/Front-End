import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../store/teacherAuth/authActions";
import { parentlogout } from "../store/parentAuth/authActions";
const NavBar = props => {
  const [showLogout, setShowLogout] = useState(true);

  useEffect(() => {
    function showLogout() {
      if (
        localStorage.getItem("token") ||
        localStorage.getItem("parentToken")
      ) {
        setShowLogout(true);
      } else {
        setShowLogout(false);
      }
    }
    showLogout();
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("teacherId");
    localStorage.removeItem("parentToken");
    localStorage.removeItem("parentId");
    localStorage.removeItem("targetQuestion");
    localStorage.removeItem("classId");
    localStorage.removeItem("language");
    setShowLogout(false);
    // setToken(null);
    // setParentToken(null);
  };
  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background-color: #00ced1;
    font-family: "Manjari";
    padding: 15px;
  `;

  const Logo = styled.h1`
    color: white;
  `;

  const Icon = styled.div`
    color: white;
    font-size: 18px;
  `;
  return (
    <Nav>
      <a
        href={
          localStorage.getItem("token")
            ? "/#/teacher/dashboard"
            : localStorage.getItem("parentToken") &&
              localStorage.getItem("language") === "Spanish"
            ? "/#/parent/spn/dashboard"
            : localStorage.getItem("parentToken") &&
              localStorage.getItem("language") !== "Spanish"
            ? "/#/parent/dashboard"
            : "/"
        }
      >
        <Logo>ClassSnap</Logo>
      </a>

      <Icon className={showLogout ? "logout" : "logout off"}>
        <Link to="/" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </Link>
      </Icon>
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    login: state.teacherAuth.login,
    parentLogin: state.parentAuth.parentLogin
  };
};
export default connect(mapStateToProps, { logout })(NavBar);
