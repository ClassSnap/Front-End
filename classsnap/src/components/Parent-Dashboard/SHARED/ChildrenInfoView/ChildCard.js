import React from "react";
import { Card } from "semantic-ui-react";

const ChildCard = props => {
  return (
    <div className="child-card">
      <Card
        color="teal"
        header={props.firstName}
        meta={props.lastName}
        onClick={() => {
          props.onClick(props.learnerId, props.firstName);
        }}
      />
    </div>
  );
};

export default ChildCard;
