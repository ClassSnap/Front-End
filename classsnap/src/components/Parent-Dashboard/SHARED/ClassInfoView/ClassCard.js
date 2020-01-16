import React from "react";
import { Card } from "semantic-ui-react";

const ChildClassCard = props => {
  return (
    <div className="class-card">
      <Card
        header={props.className}
        meta={props.teacher}
        onClick={() =>
          props.onClick(props.id, props.className, props.teacherLastName)
        }
      />
    </div>
  );
};

export default ChildClassCard;
