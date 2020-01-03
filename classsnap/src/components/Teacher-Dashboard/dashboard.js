import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
// import { connect } from "react-redux";

//component
import ClassList from "./ClassList";
import QuestionList from "../Teacher-Single-Class-Dashboard/QuestionList";
import Results from "../Teacher-Single-Class-Dashboard/Results";

//action
// import { getAllQuestions } from "../../store/teachers/action";

const TeacherDashboard = props => {
  const [list, setList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [name, setName] = useState();
  const [classCode, setClassCode] = useState();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [currentClassId, setCurrentClassId] = useState();
  const [targetQuestion, setTargetQuestion] = useState();
  const [targetQuestionId, setTargetQuestionId] = useState();

  useEffect(() => {
    async function fetchList() {
      const teacherId = localStorage.getItem("teacherId");
      await axiosWithAuth()
        .get(`/api/teacher/${teacherId}`)
        .then(teacher => {
          console.log(teacher);
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

        setShowWelcome(false);
        setShowQuestion(true);
        setShowResult(false);
        setCurrentClassId(id);
      });
  };

  const handleQuestionClick = async (id, question) => {
    await axiosWithAuth()
      .get(`/api/rating/question/${id}`)
      .then(res => {
        setResults(res.data);
        setShowWelcome(false);
        setShowQuestion(false);
        setShowResult(true);
        setTargetQuestion(question);
        setTargetQuestionId(id);
        console.log(targetQuestion);
        const target = localStorage.setItem("targetQuestion", id);
      });
  };

  const handleReturnClick = async () => {
    await axiosWithAuth()
      .get(`/api/question/class/${currentClassId}`)
      .then(res => {
        console.log("clicked");
        setShowWelcome(false);
        setShowQuestion(true);
        setShowResult(false);
      });
    setShowWelcome(false);
    setShowQuestion(true);
  };

  const handleDeleteQuestion = async id => {
    await axiosWithAuth()
      .delete(`/api/question/${id}`)
      .then(res => {
        axiosWithAuth()
          .get(`/api/question/class/${currentClassId}`)
          .then(res => {
            const reverse = res.data.reverse();
            setQuestionList(reverse);
            setShowQuestion(true);
            setShowResult(false);
          });
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
      {/* Left Sidebar is a constant. It will show up at all times */}
      <LeftBar>
        <ClassList list={list} handleClick={handleClick} />
      </LeftBar>

      {/* Right sidebar will change based on user's click */}
      <RightBar>
        {/* Display List of Questions */}
        <QuestionList
          questionList={questionList}
          name={name}
          classCode={classCode}
          showQuestion={showQuestion}
          handleClick={handleQuestionClick}
        />
        {/* Display Welcome Message */}
        <div
          className={showWelcome ? "welcome-teacher " : "welcome-teacher off"}
        >
          <h1>Hello Teacher!</h1>
          <div className="dash-button">
            <h3>Thank you for your hard work. </h3>
            <h3>Know that you are making an impact</h3>
            <h3>You are a hero</h3>
            <h3>Send a question now to continue your impact</h3>
            <Link to="/teacher/addquestion">
              <Button>Add Question</Button>
            </Link>
            <Link to="/teacher/addstudent">
              <Button>Add Student</Button>
            </Link>
          </div>
        </div>
        {/* Display Results  */}
        <Results
          showResult={showResult}
          question={targetQuestion}
          questionId={targetQuestionId}
          results={results}
          clickReturn={handleReturnClick}
          handleDeleteQuestion={handleDeleteQuestion}
        />
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
