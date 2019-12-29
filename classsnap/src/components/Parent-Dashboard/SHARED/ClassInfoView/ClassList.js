import React from "react";
import { Link } from "react-router-dom";

//components
import ChildClassCard from "./ClassCard";

const ChildClassList = props => {
  return (
    <div className={props.showSession ? "classList" : "classList off"}>
      <h2>{props.firstName}'s Classes</h2>
      {props.session.map(info => (
        <ChildClassCard
          key={info.classCode}
          id={info.classId}
          className={info.name}
          teacherLastName={info.teacherLastName}
          teacher={info.teacherLastName}
          onClick={props.handleClick}
        />
      ))}

      <button onClick={props.dashboard}>Back to Dashboard</button>
    </div>
  );
};
export default ChildClassList;
