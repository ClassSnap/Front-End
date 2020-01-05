import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getAllQuestions } from "../../store/teachers/action";

//component

import QuestionCard from "./QuestionCard";

const QuestionList = props => {
  console.log(props.classId);
  return (
    <div className={props.showQuestion ? "questionList" : "questionList off"}>
      <h2>{props.name}</h2>
      <h4>Class Code:{props.classCode}</h4>
      <Link to="/teacher/addquestion">
        <Button>Add Question</Button>
      </Link>
      <Link to="/teacher/addstudent">
        <Button>Add Students</Button>
      </Link>
      <Link
        to={{
          pathname: "/teacher/viewstudent",
          state: props.classId
        }}
      >
        <Button>View Students/Parents</Button>
      </Link>

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
