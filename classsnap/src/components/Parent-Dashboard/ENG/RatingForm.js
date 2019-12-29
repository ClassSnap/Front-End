import React, { useState } from "react";
import { Rating, Button } from "semantic-ui-react";

const ParentRatingForm = props => {
  const [parentRating, setParentRating] = useState({
    questionId: props.questionId,
    classId: props.classId,
    learnerParentId: props.learnerParentId,
    rating: 0,
    completed: true
  });
  const [rating, setRating] = useState(0);

  const handleChange = (e, { rating, maxRating }) => {
    setRating(rating);
    setParentRating({ ...parentRating, rating: rating });
  };

  return (
    <div
      className={
        props.showRatingForm ? "parent-rating-form" : "parent-rating-form off"
      }
    >
      <div>
        <h2>{props.question}</h2>

        <h4>How clear is your child's response?</h4>
        <Rating
          maxRating={5}
          clearable
          size="massive"
          onRate={handleChange}
          value={parentRating}
        />
        <Button>Submit</Button>
      </div>
      <button onClick={props.dashboard}>Back to Dashboard</button>
    </div>
  );
};

export default ParentRatingForm;
