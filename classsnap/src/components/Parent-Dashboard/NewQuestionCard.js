import React from "react";
import { Card } from "semantic-ui-react";

const NewQuestionCard = props => {
  return (
    <div className="question-card">
      <Card color="orange" header={props.question} meta={props.date} />
    </div>
  );
};

export default NewQuestionCard;
