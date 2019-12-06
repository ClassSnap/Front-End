import React from "react";
import { Rating, Button } from "semantic-ui-react";

const ParentRatingForm = props => {
  return (
    <div className="parent-rating-form">
      <h2>
        {props.subject} Question of {props.date}
      </h2>
      <div className="question">{props.question}</div>
      <h4>How clear is your child's response?</h4>
      <Rating maxRating={5} clearable size="massive" />
      <Button>Submit</Button>
    </div>
  );
};

export default ParentRatingForm;
