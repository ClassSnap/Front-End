import React from "react";
import { Card } from "semantic-ui-react";

const QuestionCard = props => {
  console.log("QuestionCard");
  return (
    <div className="question-card">
      <Card color="grey" header={props.question} meta={props.classCode} />
      {/* Look up card design and identify necessary information in card  */}
    </div>
  );
};

export default QuestionCard;

//To-do
//1. check payload to select output on data card
//2. pick the correct the card type from semantic ui
