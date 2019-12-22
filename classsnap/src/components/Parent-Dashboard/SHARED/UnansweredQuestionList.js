import React, { useState, useEffect } from "react";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";
import QuestionCard from "./QuestionCard";

const UnansweredQuestionList = props => {
  const [learners, setLearners] = useState([]);
  const [blankRatings, setBlankRatings] = useState([]);

  useEffect(() => {
    //get learner_parent IDs
    const parentId = localStorage.getItem("parentId");
    async function getUnansweredQuestions() {
      // await axiosWithParentAuth()
      //   .get(`/api/parent/${parentId}`)
      //   .then(res => {
      //     setLearners(res.data);
      //     res.data.forEach(learner =>
      axiosWithParentAuth()
        .get(`/api/ssrating/parent/${parentId}`)
        .then(ratings => {
          console.log(ratings.data);
          const reverse = ratings.data.reverse();
          const filterRating = reverse.filter(rating => !rating.rating);
          setBlankRatings(...blankRatings, filterRating);
        });
      // );
    }
    // }
    getUnansweredQuestions();
    // get blank ratings with question data for each learner
  }, []);

  return (
    <div
      className={
        props.showUnanswered ? "unanswered-list" : "unanswered-list off"
      }
    >
      {blankRatings.map(rating => (
        <QuestionCard
          id={rating.id}
          questionId={rating.questionId}
          classId={rating.classId}
          learnerParentId={rating.learnerParentId}
          firstName={rating.firstName}
          lastName={rating.lastName}
          date={rating.date}
          question={rating.question}
          onClick={props.handleUnansweredClick}
        />
      ))}
    </div>
  );
};

export default UnansweredQuestionList;
