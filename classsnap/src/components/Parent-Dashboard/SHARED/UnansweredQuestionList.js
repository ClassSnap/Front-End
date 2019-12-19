import React, { useState, useEffect } from "react";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";
import QuestionCard from "./QuestionCard";

const UnansweredQuestionList = () => {
  const [learners, setLearners] = useState([]);
  const [blankRatings, setBlankRatings] = useState([]);

  useEffect(() => {
    //get learner_parent IDs
    const parentId = localStorage.getItem("parentId");
    async function getUnansweredQuestions() {
      await axiosWithParentAuth()
        .get(`/api/parent/${parentId}`)
        .then(res => {
          setLearners(res.data);
          res.data.forEach(learner =>
            axiosWithParentAuth()
              .get(`/api/ssrating/learnerParent/${learner.id}`)
              .then(ratings => {
                console.log(ratings.data);
                const filterRating = ratings.data.filter(
                  rating => !rating.rating
                );
                setBlankRatings(...blankRatings, filterRating);
              })
          );
        });
    }
    getUnansweredQuestions();
    // get blank ratings with question data for each learner
  }, []);

  return (
    <div>
      {blankRatings.map(rating => (
        <QuestionCard rating={rating} />
      ))}
    </div>
  );
};

export default UnansweredQuestionList;
