import React from "react";
import { Card } from "semantic-ui-react";

const AnsweredQuestionCard = props => {
  return (
    <div className="question-card">
      <Card color="teal" header={props.question} meta={props.date} />
    </div>
  );
};

export default AnsweredQuestionCard;
