import React from "react";

const ResultPage = props => {
  return (
    <div className="result-page">
      {localStorage.getItem("language") === "Spanish" ? (
        <h2>{`Pregunta ${questionOne.subject} del ${questionOne.date}`}</h2>
      ) : (
        <h2>{`${questionOne.subject} Question of ${questionOne.date}`}</h2>
      )}
      <div className="question-from-teacher">
        <p>{questionOne.question}</p>
      </div>
      <h4>Your rating</h4>
      <Rating maxRating={5} clearable size="massive" value={props.rating} />
      <div className="button"></div>
    </div>
  );
};

export default ResultPage;
