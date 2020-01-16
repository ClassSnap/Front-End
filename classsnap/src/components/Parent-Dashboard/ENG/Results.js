import React, { useState, useEffect } from "react";
import { Rating, Button } from "semantic-ui-react";

const QuestionResult = props => {
  const [learnerId, setLearnerId] = useState();
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setRating(props.results[0]);
  }, []);

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
        {localStorage.getItem("language") === "Spanish" ? (
          <h4>Tu clasificación</h4>
        ) : (
          <h4>Your Rating</h4>
        )}

        <Rating
          maxRating={5}
          rating={rating === undefined ? 0 : rating.rating}
          size="massive"
          disabled
        />
      </div>
      {localStorage.getItem("language") === "Spanish" ? (
        <Button onClick={props.dashboard}>Volver al tablero</Button>
      ) : (
        <Button onClick={props.dashboard}>Back to Dashboard</Button>
      )}{" "}
    </div>
  );
};

export default QuestionResult;
