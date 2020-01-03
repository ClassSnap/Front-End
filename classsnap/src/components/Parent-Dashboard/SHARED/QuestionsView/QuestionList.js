import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

//component
import QuestionCard from "./QuestionCard";

const QuestionList = props => {
  return (
    <div className={props.showQuestion ? "questionList" : "questionList off"}>
      <h2>{props.name}</h2>
      <h3>Teacher: {props.teacherLastName}</h3>
      {props.questionList.map(quest => (
        <QuestionCard
          key={quest.id}
          id={quest.id}
          question={quest.question}
          date={quest.date}
          onClick={props.handleClick}
        />
      ))}
      <button onClick={props.dashboard}>Back to Dashboard</button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     isLoading: state.teacher.isLoading,
//     error: state.teacher.error,
//     classId: state.teacher.classId,
//     question: state.teacher.question,
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getAllQuestions },
// )(QuestionList);

export default QuestionList;
