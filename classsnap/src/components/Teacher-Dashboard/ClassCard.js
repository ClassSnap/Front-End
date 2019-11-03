import React from "react";
import { Card } from "semantic-ui-react";

const ClassCard = props => {
  console.log("ClassCard");
  return (
    <div className="class-card">
      <Card color="teal" header={props.name} meta={props.classCode} />
    </div>
  );
};

export default ClassCard;
