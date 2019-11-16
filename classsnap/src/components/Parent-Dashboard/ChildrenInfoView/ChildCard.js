import React from "react";
import { Card } from "semantic-ui-react";

const ChildCard = props => {
  return (
    <div className="child-card">
      <Card header={(props.firstName, props.lastName)} />
    </div>
  );
};
