import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../../utils/axiosWithAuth";

//component
import ChildList from "./ChildrenInfoView/ChildList";

const ParentDashboard = props => {
  const [children, setChildren] = useState([]);
  useEffect(() => {
    async function fetchChildren() {
      const parentId = localStorage.getItem("parentId");
      await axiosWithAuth()
        .get(`/api/parent/${parentId}`)
        .then(children => {
          setChildren(children);
        });
    }
    fetchChildren();
  }, []);

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
        <LeftBar>{/* <ChildList /> */}</LeftBar>
        <RightBar></RightBar>
      </Dashboard>
    </div>
  );
};

export default ParentDashboard;
