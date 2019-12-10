import React, { useState, useEffect } from "react";
import { Rating } from "semantic-ui-react";
import Results from "../../Teacher-Single-Class-Dashboard/Results";

const QuestionResult = props => {
  const [learnerId, setLearnerId] = useState();
  const [target, setTarget] = useState();

  const getRating = () => {
    const target = props.results.filter(info => info.learnerId === learnerId);
  };

  getRating();

  return (
    <div
      className={
        props.showResult ? "parent-response-form" : "parent-response-form off"
      }
    >
      {/* <h2>{`${questionOne.subject} Question of ${questionOne.date}`}</h2> */}
      <div className="question-from-teacher">
        <p>{props.question}</p>
      </div>
      <h4>Your child's rating</h4>
      <Rating maxRating={5} defaultRating={4} size="massive" disabled />
    </div>
  );
};

export default QuestionResult;

//12-9-2019
//All results are fetched from backend
//Unable to single out results based on learner ID
//Question Form renders on dashboard
