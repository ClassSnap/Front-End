import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import axiosWithAuth from "../../utils/axiosWithAuth";

//component
import ChildList from "./ChildrenInfoView/ChildList";
import AddChildForm from "./AddChildForm";

const ParentDashboardSPN = props => {
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
        <RightBar>
          <h1>Parent Dashboard</h1>
          <Button>Ingresa alumno</Button>
        </RightBar>
      </Dashboard>
    </div>
  );
};

export default ParentDashboardSPN;
