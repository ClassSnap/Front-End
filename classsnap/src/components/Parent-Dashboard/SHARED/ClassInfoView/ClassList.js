import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

//components
import ChildClassCard from "./ClassCard";

const ChildClassList = props => {
  return (
    <div className={props.showSession ? "classList" : "classList off"}>
      {localStorage.getItem("language") === "Spanish" ? (
        <h2>Las clases de {props.firstName}</h2>
      ) : (
        <h2>{props.firstName}'s Classes</h2>
      )}

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

      {localStorage.getItem("language") === "Spanish" ? (
        <Button onClick={props.dashboard}>Volver al tablero</Button>
      ) : (
        <Button onClick={props.dashboard}>Back to Dashboard</Button>
      )}
    </div>
  );
};
export default ChildClassList;
