import React from "react";
import { Card } from "semantic-ui-react";

const QuestionResultCard = props => {
  return (
    <Card
      header={props.header}
      meta={`Sent on ${props.date}`}
      description={`Class Average: ${props.average}`}
    />
  );
};

export default QuestionResultCard;
