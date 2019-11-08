import React, { useState } from "react";

//component
import ClassList from "../Teacher-Dashboard/ClassList";
import QuestionList from "./QuestionList";

const SingleClassDashboard = () => {
  return (
    <div className="single-class-dashboard">
      <div className="left-bar">
        <ClassList />
      </div>
      <div className="right-bar">
        {/* Filter function possible */}
        {/* question list component here */}
        <QuestionList />
      </div>
    </div>
  );
};

export default SingleClassDashboard;

//To-do
//1. need a dashboard for the question
//2. question dashboard fetches the stuents result for that one question
//3. Provide edit and delete question function as well
