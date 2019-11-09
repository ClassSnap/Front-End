import React from "react";
import { Card } from "semantic-ui-react";

const ClassCard = props => {
  return (
    <div className="class-card">
      <Card
        color="teal"
        header={props.name}
        meta={props.classCode}
        onClick={() =>
          props.onClick(props.id, props.name, props.classCode, props.history)
        }
      />
    </div>
  );
};

export default ClassCard;
