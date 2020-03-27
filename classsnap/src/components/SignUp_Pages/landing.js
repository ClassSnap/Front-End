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
    // display: flex;
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
        <div className="language-button-box">
          {/* <div className={spanish ? "show-spn off" : "show-spn"}> */}
            <button className={spanish? "off":"language-button"} onClick={handleSpanishClick}>
              Español
            </button>
          {/* </div> */}
          {/* <div className={spanish ? "show-eng" : "show-eng off"}> */}
            <button className={spanish? "language-button":"off"} onClick={handleEnglishClick}>
              English
            </button>
          {/* </div> */}
         </div>
          <div className={spanish ? "landing off" : "landing"}>
            <div className="onboard-top">
              <h1>Welcome to ClassSnap</h1>
              <h2>Get Started with selecting your user type</h2>
              <div className="button-container">
                <Link to="/teachersignup">
                <button className="teacher-button">Teacher Register</button>
                </Link>
                <Link to="/parentsignup">
                  <button className="parent-button">Parent Register</button>
                </Link>
              </div>
            </div>
            <Divider />
            <div className="onboard-bottom">
              <h2>Already have an account? Login below.</h2>
              <div className="button-container">
                <Link to="/teacherlogin">
                  <button className="teacher-button">Teacher Login</button>
                </Link>
                <Link to="/parentlogin">
                  <button className="parent-button">Parent Login</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={spanish ? "landing" : "landing off"}>
            <div className="onboard-top">
              <h1>Bienvenido a ClassSnap</h1>
              <h2>Comience a seleccionar su tipo de usuario</h2>
              <div className="button-container">
                <Link to="/teachersignup">
                  <button className="teacher-button">Registro de maestros</button>
                </Link>
                <Link to="/parentsignup">
                  <button className="parent-button">Registro de padres</button>
                </Link>
              </div>
            </div>
            <Divider />
            <div className="onboard-bottom">
              <h2>¿Tienes una cuenta? Entre aquí.</h2>
              <div className="button-container">
                <Link to="/teacherlogin">
                  <button className="teacher-button">Para maestros</button>
                </Link>
                <Link to="/parentloginspn">
                  <button className="parent-button">Para padres</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default LandingPage;
