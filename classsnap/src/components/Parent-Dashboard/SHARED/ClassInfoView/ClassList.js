import React from "react";

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
    </div>
  );
};
export default ChildClassList;
