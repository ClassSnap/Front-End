import React, { useState } from "react";

//components
import ClassList from "../../Teacher-Dashboard/ClassList";

const SingleQuestionDashboard = () => {
  return (
    <div className="single-question-dashboard">
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

export default SingleQuestionDashboard;
