import React, { useState, useEffect } from "react";

//component
import axiosWithAuth from "../../utils/axiosWithAuth";
import QuestionCard from "./QuestionCard";

const QuestionList = props => {
  const [questionList, setQuestionList] = [];

  //useEffect fetches question by class Id
  //classId should be passed by the card that is clicked on

  return <div className="questionList"></div>;
};

export default QuestionList;

//To-do
//1. Fetch data from either redux or useEffect axios call
//2. Make sure that all cards populates
//3. Card may need edit and delete function as well.
