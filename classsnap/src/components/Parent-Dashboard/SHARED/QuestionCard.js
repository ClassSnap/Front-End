import React from "react";

const QuestionCard = props => {
  console.log(props.rating);
  return (
    <div>
      <h1>Rating</h1>
      <p>{props.rating.rating}</p>
    </div>
  );
};

export default QuestionCard;
