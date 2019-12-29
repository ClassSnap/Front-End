import React, { useState, useEffect } from "react";
import { Rating } from "semantic-ui-react";

const QuestionResult = props => {
  const getRating = props.results.filter(
    info => info.learnerId === props.learnerId
  )[0];

  return (
    <div
      className={
        props.showResult ? "parent-response-form" : "parent-response-form off"
      }
    >
      <div>
        <div className="question-from-teacher">
          <p>{props.question}</p>
        </div>
        <h4>Your child's rating</h4>
        <Rating
          maxRating={5}
          rating={getRating === undefined ? 0 : getRating.rating}
          size="massive"
          disabled
        />
      </div>
      <button onClick={props.dashboard}>Back to Dashboard</button>
    </div>
  );
};

export default QuestionResult;

//12-9-2019
//All results are fetched from backend
//Unable to single out results based on learner ID
//Question Form renders on dashboard
