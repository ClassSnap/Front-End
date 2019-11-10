import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
// import { connect } from "react-redux";

//component
import ClassList from "./ClassList";
import QuestionList from "../Teacher-Single-Class-Dashboard/QuestionList";
import QuestionCard from "../Teacher-Single-Class-Dashboard/QuestionCard";
//action
// import { getAllQuestions } from "../../store/teachers/action";

const TeacherDashboard = props => {
  const [list, setList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [name, setName] = useState();
  const [classCode, setClassCode] = useState();
  const [showQuestion, setShowQuestion] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const teacherId = localStorage.getItem("teacherId");
      await axiosWithAuth()
        .get(`/api/teacher/${teacherId}`)
        .then(teacher => {
          setList(teacher.data.classes);
        });
    }
    fetchList();
  }, []);

  const handleClick = async (id, name, classCode) => {
    await axiosWithAuth()
      .get(`/api/question/class/${id}`)
      .then(res => {
        const reverse = res.data.reverse();
        setQuestionList(reverse);
        setName(name);
        setClassCode(classCode);
        console.log(name, classCode);
        setShowQuestion(true);
      });
  };

  const handleQuestionClick = async id => {
    await axiosWithAuth()
      .get(`/api/rating/question/${id}`)
      .then(res => {
        console.log(res.data);
        setResult(res.data);
      });
  };

  const Dashboard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `;

  const LeftBar = styled.div`
    width: 15%;
  `;

  const RightBar = styled.div`
    width: 85%;
  `;

  return (
    <Dashboard>
      <LeftBar>
        <ClassList list={list} handleClick={handleClick} />
      </LeftBar>
      <RightBar>
        <QuestionList
          questionList={questionList}
          name={name}
          classCode={classCode}
          showQuestion={showQuestion}
          handleClick={handleQuestionClick}
        />

        <div
          className={showQuestion ? "welcome-teacher off" : "welcome-teacher"}
        >
          <h1>Hello Teacher!</h1>
          <div className="dash-button">
            <h3>Thank you for your hard work. </h3>
            <h3>Know that you are making an impact</h3>
            <h3>You are a hero</h3>
            <h3>Send a question now to continue your impact</h3>
            <Link to="/teacher/addquestion">
              <button>Add Question</button>
            </Link>
          </div>
        </div>
      </RightBar>
    </Dashboard>
  );
};

// function mapStateToProps(state) {
//   return {
//     isLoading: state.teacher.isLoading,
//     error: state.teacher.error,
//     question: state.teacher.question,
//   };
// }

// export default connect(
//   mapStateToProps,
//   { getAllQuestions },
// )(TeacherDashboard);

export default TeacherDashboard;

//11-10-2019
//Question Card Click works
//Need to work on BE to fix what data the `/api/
