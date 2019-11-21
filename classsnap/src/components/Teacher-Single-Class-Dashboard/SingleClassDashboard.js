import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
//component
import ClassList from "../Teacher-Dashboard/ClassList";
import QuestionList from "./QuestionList";

const SingleClassDashboard = props => {
  const handleClick = e => [
    localStorage.removeItem("className"),
    localStorage.removeItem("classcode"),
  ];
  return (
    <div className="single-class-dashboard">
      {/* <div className="left-bar">
        <ClassList hist={props.history} />
      </div> */}
      <div className="right-bar">
        {/* Filter function possible */}
        {/* question list component here */}
        <QuestionList />
        <h1>This is a test</h1>
        <Link to="/teacher/dashboard">
          <Button onClick={handleClick}>Return to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default SingleClassDashboard;

//To-do
//1. need a dashboard for the question
//2. question dashboard fetches the stuents result for that one question
//3. Provide edit and delete question function as well
