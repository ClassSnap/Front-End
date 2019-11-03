import React, { useState, useEffect } from "react";

//component
import ClassList from "./ClassList";

const teacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <div className="teacher-left-bar">
        <ClassList />
      </div>
      <div className="teacher-right-bar">
        <h1>Hello Teacher!</h1>
        <div className="dash-button">
          <button>Add Class</button>
          <button>Add Question</button>
        </div>
      </div>
    </div>
  );
};

export default teacherDashboard;
