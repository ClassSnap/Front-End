import React from "react";
import { Card } from "semantic-ui-react";

const ChildCard = props => {
  return (
    <div className="child-card">
      <h1>Card</h1>
      <Card header={(props.firstName, props.lastName) || "test"} />
    </div>
  );
};

export default ChildCard;
