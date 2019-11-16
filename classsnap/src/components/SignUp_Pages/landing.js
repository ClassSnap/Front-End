import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  const Divider = styled.hr`
    margin: 50px 0px;
  `;
  const Buttoncontainer = styled.div`
    margin: 20px 10px;
  `;

  return (
    <div className="landing-page">
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
  );
};

export default LandingPage;