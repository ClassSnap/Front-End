import React, { useState } from "react";
import { Rating, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { editRating } from "../../../store/parents/action";

const ParentRatingForm = props => {
  const [rating, setRating] = useState(0);
  const [parentRating, setParentRating] = useState({
    questionId: props.questionId,
    classId: props.classId,
    learnerParentId: props.learnerParentId,
    rating: rating,
    completed: true
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showSubmit, setShowSubmit] = useState(true);
  const handleChange = (e, { rating, maxRating }) => {
    setRating(rating);
    setParentRating({ ...parentRating, rating: rating });
  };

  const handleSubmit = () => {
    props.editRating(parentRating, props.ratingId);
    setShowSubmit(false);

    setShowSuccess(true);
  };

  return (
    <div
      className={
        props.showRatingForm ? "parent-rating-form" : "parent-rating-form off"
      }
    >
      <div>
        <h2>{props.question}</h2>

        <h4>Evalua la claridad de la respuesta del alumno</h4>
        <Rating
          maxRating={5}
          clearable
          size="massive"
          onRate={handleChange}
          value={parentRating}
        />
        <Button
          className={showSubmit ? "submit" : "submit off"}
          onClick={handleSubmit}
        >
          {showSuccess ? "Presentada" : "Enviar"}
        </Button>
      </div>
      {localStorage.getItem("language") === "Spanish" ? (
        <Button onClick={props.dashboard}>Volver al tablero</Button>
      ) : (
        <Button onClick={props.dashboard}>Back to Dashboard</Button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.parent.isLoading,
    error: state.parent.error
  };
};

export default connect(mapStateToProps, { editRating })(ParentRatingForm);

// export default ParentRatingForm;
