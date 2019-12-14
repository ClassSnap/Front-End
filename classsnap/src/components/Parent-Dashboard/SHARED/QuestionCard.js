import React from "react";

const QuestionCard = props => {
  console.log(props.rating);
  return (
    <div>
      <p>{props.rating.rating}</p>
    </div>
  );
};

export default QuestionCard;
