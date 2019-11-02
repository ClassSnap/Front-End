import React from "react";
import { Rating } from "semantic-ui-react";
const ParentAnsweredQuestionCard = props => {
  return (
    <div className="parent-answered-question-card">
      <h2>Question of {props.date}</h2>
      <div className="question-from-teacher">
        <h4>How do you solve (3+4) x 15 ?</h4>
      </div>
      <h4>Your Rating</h4>
      <Rating maxRating={5} clearable />
    </div>
  );
};

export default ParentAnsweredQuestionCard;
