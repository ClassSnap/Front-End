import React, { useState, useEffect } from "react";
import { Rating } from "semantic-ui-react";

const QuestionResult = props => {
  console.log(props.results);

  const [learnerId, setLearnerId] = useState();
  const [rating, setRating] = useState([]);
  console.log(props.results);

  useEffect(() => {
    setRating(props.results[0]);
  }, []);
  console.log(rating);
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
          rating={rating === undefined ? 0 : rating.rating}
          size="massive"
          disabled
        />
      </div>
      <button onClick={props.dashboard}>Back to Dashboard</button>
    </div>
  );
};

export default QuestionResult;
