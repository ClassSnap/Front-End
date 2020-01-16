import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const ParentNewQuestionCard = props => {
  return (
    <Card
      header={`${props.subject} Question from ${props.teacher}`}
      meta={`Due on ${props.date}`}
      description={props.question}
    />
  );
};

export default ParentNewQuestionCard;

// add link to the card to link to the response form
