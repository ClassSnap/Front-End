import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import axiosWithParentAuth from "../../utils/axiosWithParentAuth";

//component
import ChildList from "./SHARED/ChildrenInfoView/ChildList";
import AddChildForm from "./ENG/AddChildForm";

import UnansweredQuestionList from "../Parent-Dashboard/SHARED/UnansweredQuestionList";

import ClassList from "./SHARED/ClassInfoView/ClassList";
import QuestionList from "./SHARED/QuestionsView/QuestionList";
import QuestionResult from "./ENG/Results";
import ParentRatingForm from "./ENG/RatingForm";

const ParentDashboard = props => {
  const [children, setChildren] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [name, setName] = useState();
  const [learnerId, setLearnerId] = useState("");
  const [teacherLastName, setTeacher] = useState();
  const [session, setSession] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [allRating, setAllRating] = useState([]);
  const [results, setResults] = useState([]);
  const [showSession, setShowSession] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showUnanswered, setUnanswered] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [childFirstName, setChildFirstName] = useState("");
  const [updateRatingInfo, setUpdateRatingInfo] = useState({});

  useEffect(() => {
    async function fetchChildren() {
      const parentId = localStorage.getItem("parentId");

      await axiosWithParentAuth()
        .get(`/api/parent/${parentId}`)
        .then(res => {
          setChildren(res.data);
          setShowWelcome(true);
          setUnanswered(true);
        });
    }
    fetchChildren();
  }, []);

  const handleClick = async (learnerId, firstName) => {
    await axiosWithParentAuth()
      .get(`/api/learnerclass/${learnerId}`)
      .then(res => {
        console.log(res.data);
        setSession(res.data);
        setLearnerId(learnerId);
        setShowSession(true);
        setShowWelcome(false);
        setUnanswered(false);
        setShowQuestion(false);
        setShowResults(false);
        setShowRatingForm(false);
        setChildFirstName(firstName);
      });
  };

  const handleClassClick = async (classId, name, teacherLastName) => {
    console.log("clicked");
    console.log(classId);
    await axiosWithParentAuth()
      .get(`/api/learnerclass/questions/${classId}`)
      .then(res => {
        console.log(res.data);
        setQuestionList(res.data);
        setShowQuestion(true);
        setShowSession(false);
        setShowResults(false);
        setShowRatingForm(false);
        setName(name);
        setTeacher(teacherLastName);
      });
  };

  const handleQuestionClick = async (id, question) => {
    await axiosWithParentAuth()
      .get(`/api/ssrating/${id}`)
      .then(res => {
        setResults(res.data);
        console.log(res.data);
        setCurrentQuestion(question);
        setShowResults(true);
        setShowQuestion(false);
        setShowRatingForm(false);
      });
  };

  const handleUnansweredClick = async (
    id,
    question,
    questionId,
    classId,
    learnerParentId
  ) => {
    const updateRating = { id, question, questionId, classId, learnerParentId };
    setUpdateRatingInfo(updateRating);
    setShowRatingForm(true);
    setUnanswered(false);
    setShowWelcome(false);
  };

  const returnToDashboard = () => {
    setShowSession(false);
    setShowWelcome(true);
    setUnanswered(true);
    setShowQuestion(false);
    setShowResults(false);
    setShowRatingForm(false);
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
    <div ClassName="parent-dashboard">
      <Dashboard>
        <LeftBar>
          <ChildList children={children} handleClick={handleClick} />
        </LeftBar>
        <RightBar>
          <div className={showWelcome ? "welcome" : "welcome off"}>
            <h1>Parent Dashboard</h1>
            <Link to="/parent/addchild">
              <Button>Add Child</Button>
            </Link>
          </div>
          <ClassList
            session={session}
            showSession={showSession}
            firstName={childFirstName}
            handleClick={handleClassClick}
            dashboard={returnToDashboard}
          />
          <QuestionList
            questionList={questionList}
            name={name}
            teacherLastName={teacherLastName}
            showQuestion={showQuestion}
            handleClick={handleQuestionClick}
            dashboard={returnToDashboard}
          />

          <QuestionResult
            results={results}
            showResult={showResults}
            question={currentQuestion}
            learnerId={learnerId}
            dashboard={returnToDashboard}
          />
          <UnansweredQuestionList
            showUnanswered={showUnanswered}
            handleUnansweredClick={handleUnansweredClick}
          />

          <ParentRatingForm
            showRatingForm={showRatingForm}
            question={
              updateRatingInfo.question ? updateRatingInfo.question : null
            }
            classId={updateRatingInfo.classId ? updateRatingInfo.classId : null}
            learnerParentId={
              updateRatingInfo.learnerParentId
                ? updateRatingInfo.learnerParentId
                : null
            }
            ratingId={updateRatingInfo.id ? updateRatingInfo.id : null}
            questionId={
              updateRatingInfo.questionId ? updateRatingInfo.questionId : null
            }
            dashboard={returnToDashboard}
          />
        </RightBar>
      </Dashboard>
    </div>
  );
};

export default ParentDashboard;
