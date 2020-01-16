import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  const [spanish, setSpanish] = useState(false);
  const Divider = styled.hr`
    margin: 50px 0px;
  `;
  const Buttoncontainer = styled.div`
    margin: 20px 10px;
  `;

  const Language = styled.div`
    margin-top: 20px;
    margin-right: 50px;
    margin-bottom: -30px
    text-align: right;
  `;

  const handleSpanishClick = () => {
    setSpanish(true);
    console.log("clicked");
  };

  const handleEnglishClick = () => {
    setSpanish(false);
  };
  {
    if (localStorage.getItem("token")) {
      return <Redirect to="/teacher/dashboard" />;
    } else if (
      localStorage.getItem("parentToken") &&
      localStorage.getItem("language") === "Spanish"
    ) {
      return <Redirect to="/parent/spn/dashboard" />;
    } else if (
      localStorage.getItem("parentToken") &&
      localStorage.getItem("language") !== "Spanish"
    ) {
      return <Redirect to="/parent/dashboard" />;
    } else {
      return (
        <div className="landing-page">
          <Language className={spanish ? "show-spn off" : "show-spn"}>
            <Button color="light-blue" onClick={handleSpanishClick}>
              Español
            </Button>
          </Language>
          <Language className={spanish ? "show-eng" : "show-eng off"}>
            <Button color="light-blue" onClick={handleEnglishClick}>
              English
            </Button>
          </Language>
          <div className={spanish ? "landing off" : "landing"}>
            <div className="onboard-top">
              <h2>Welcome to ClassSnap</h2>
              <h3>Get Started with selecting your user type</h3>
              <Buttoncontainer>
                <Link to="/teachersignup">
                  <Button primary>Teacher Register</Button>
                </Link>
                <Link to="/parentsignup">
                  <Button secondary>Parent Register</Button>
                </Link>
              </Buttoncontainer>
            </div>
            <Divider />
            <div className="onboard-bottom">
              <h3>Already have an account? Login below.</h3>
              <Buttoncontainer>
                <Link to="/teacherlogin">
                  <Button primary>Teacher Login</Button>
                </Link>
                <Link to="/parentlogin">
                  <Button secondary>Parent Login</Button>
                </Link>
              </Buttoncontainer>
            </div>
          </div>
          <div className={spanish ? "landing" : "landing off"}>
            <div className="onboard-top">
              <h2>Bienvenido a ClassSnap</h2>
              <h3>Comience a seleccionar su tipo de usuario</h3>
              <Buttoncontainer>
                <Link to="/teachersignup">
                  <Button primary>Registro de maestros</Button>
                </Link>
                <Link to="/parentsignup">
                  <Button secondary>Registro de padres</Button>
                </Link>
              </Buttoncontainer>
            </div>
            <Divider />
            <div className="onboard-bottom">
              <h3>¿Tienes una cuenta? Entre aquí.</h3>
              <Buttoncontainer>
                <Link to="/teacherlogin">
                  <Button primary>Para maestros</Button>
                </Link>
                <Link to="/parentlogin">
                  <Button secondary>Para padres</Button>
                </Link>
              </Buttoncontainer>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default LandingPage;
