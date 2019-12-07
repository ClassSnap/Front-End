import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import axiosWithParentAuth from "../../utils/axiosWithParentAuth";

//component
import ChildList from "./SHARED/ChildrenInfoView/ChildList";
import AddChildForm from "./ENG/AddChildForm";
import ClassList from "./SHARED/ClassInfoView/ClassList";

const ParentDashboard = props => {
  const [children, setChildren] = useState([]);
  const [session, setSession] = useState([]);
  const [showSession, setShowSession] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [childFirstName, setChildFirstName] = useState("");

  useEffect(() => {
    async function fetchChildren() {
      const parentId = localStorage.getItem("parentId");

      await axiosWithParentAuth()
        .get(`/api/parent/${parentId}`)
        .then(res => {
          setChildren(res.data);
          setShowWelcome(true);
        });
    }
    fetchChildren();
  }, []);

  const handleClick = async (learnerId, firstName) => {
    await axiosWithParentAuth()
      .get(`/api/learnerclass/${learnerId}`)
      .then(res => {
        console.log(res.data);
        setSession(res.data);
        setShowSession(true);
        setShowWelcome(false);
        setChildFirstName(firstName);
      });
  };

  const handleClassClick = async classId => {
    console.log("clicked");
    console.log(classId);
    await axiosWithParentAuth()
      .get(`/api/learnerclass/questions/${classId}`)
      .then(res => {
        console.log(res.data);
      });
  };

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
    <div ClassName="parent-dashboard">
      <Dashboard>
        <LeftBar>
          <ChildList children={children} handleClick={handleClick} />
        </LeftBar>
        <RightBar>
          <div className={showWelcome ? "welcome" : "welcome off"}>
            <h1>Parent Dashboard</h1>
            <Link to="/parent/addchild">
              <Button>Add Child</Button>
            </Link>
          </div>
          <ClassList
            session={session}
            showSession={showSession}
            firstName={childFirstName}
            handleClick={handleClassClick}
          />
        </RightBar>
      </Dashboard>
    </div>
  );
};

export default ParentDashboard;
