import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../store/teacherAuth/authActions";
const NavBar = props => {
  const [token, setToken] = useState();

  useEffect(async () => {
    await setToken(localStorage.getItem("token"));
  }, []);

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
      <a href="">
        <Logo>ClassSnap</Logo>
      </a>
      {props.isAuth ? (
        <Icon>
          {/* <a href="/#/teacher/dashboard">
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </a> */}
          <Link to="/" onClick={props.logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </Link>
        </Icon>
      ) : null}
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.teacherAuth.isAuth
  };
};
export default connect(mapStateToProps, { logout })(NavBar);
