import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllQuestions } from "../../store/teachers/action";

//component

import QuestionCard from "./QuestionCard";

const QuestionList = props => {
  return (
    <div className={props.showQuestion ? "questionList" : "questionList off"}>
      <h2>{props.name}</h2>
      <h4>Class Code:{props.classCode}</h4>

      {props.questionList.map(quest => (
        <QuestionCard
          key={quest.id}
          id={quest.id}
          question={quest.question}
          date={quest.date}
          onClick={props.handleClick}
        />
      ))}
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
//To-do
//1. Fetch data from either redux or useEffect axios call
//2. Make sure that all cards populates
//3. Card may need edit and delete function as well.
