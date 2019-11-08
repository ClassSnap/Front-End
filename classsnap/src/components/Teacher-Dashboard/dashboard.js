import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//component

import ClassList from "./ClassList";

const teacherDashboard = () => {
  const Dashboard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `;

  const LeftBar = styled.div`
    width: 15%;
  `;

  const RightBar = styled.div`
    width: 85%;
  `;

  return (
    <Dashboard>
      <LeftBar>
        <ClassList />
        <Link to="/teacher/addclass">
          <button>Add Class</button>
        </Link>
      </LeftBar>
      <RightBar>
        <h1>Hello Teacher!</h1>
        <div className="dash-button">
          <h3>Thank you for your hard work. </h3>
          <h3>Know that you are making an impact</h3>
          <h3>You are a hero</h3>
          <h3>Send a question now to continue your impact</h3>
          <button>Add Question</button>
        </div>
      </RightBar>
    </Dashboard>
  );
};

export default teacherDashboard;
