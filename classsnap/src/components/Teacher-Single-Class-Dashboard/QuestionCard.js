import React from "react";
import { Card } from "semantic-ui-react";

const QuestionCard = props => {
  return (
    <div className="question-card">
      <Card
        color="grey"
        header={props.question}
        meta={props.date.slice(0, 10)}
        onClick={() => props.onClick(props.id, props.question)}
      />
      {/* Look up card design and identify necessary information in card  */}
    </div>
  );
};

export default QuestionCard;

//To-do
//1. check payload to select output on data card
//2. pick the correct the card type from semantic ui
