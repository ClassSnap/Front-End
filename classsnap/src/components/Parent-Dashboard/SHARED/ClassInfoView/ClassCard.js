import React from "react";
import { Card } from "semantic-ui-react";

const ClassCard = props => {
  return (
    <div className="class-card">
      <Card header={props.name} meta={props.teacher} />
    </div>
  );
};
