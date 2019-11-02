import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavBar = () => {
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
      <Icon>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
        <FontAwesomeIcon icon={faInfoCircle} />
        <span>Help</span>
      </Icon>
    </Nav>
  );
};
export default NavBar;
