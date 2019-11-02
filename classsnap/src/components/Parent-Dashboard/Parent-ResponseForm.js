import React, { useContext } from "react";
import { Rating } from "semantic-ui-react";
//context
import { QuestionContext } from "../../contexts/QuestionContext";

const ParentResponseForm = () => {
  const { sampleQuestions } = useContext(QuestionContext);

  const questionOne = sampleQuestions[0];

  return (
    <div className="parent-response-form">
      <h2>{`${questionOne.subject} Question of ${questionOne.date}`}</h2>
      <div className="question-from-teacher">
        <p>{questionOne.question}</p>
      </div>
      <h4>Rate your child's response!</h4>
      <Rating maxRating={5} clearable size="massive" />
      <div className="button">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ParentResponseForm;
