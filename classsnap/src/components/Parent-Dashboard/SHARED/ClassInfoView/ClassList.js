import React from "react";

//components
import ChildClassCard from "./ClassCard";

const ChildClassList = props => {
  console.log(props.session);
  return (
    <div className={props.showSession ? "classList" : "classList off"}>
      <h2>{props.firstName}'s Classes</h2>
      {props.session.map(info => (
        <ChildClassCard
          key={info.id}
          id={info.id}
          className={info.name}
          teacher={info.teacherLastName}
        />
      ))}
    </div>
  );
};
export default ChildClassList;
