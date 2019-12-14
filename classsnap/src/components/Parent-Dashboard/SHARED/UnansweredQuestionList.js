import React, { useState, useEffect } from "react";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";
import QuestionCard from "./QuestionCard";

const UnansweredQuestionList = () => {
  const [learners, setLearners] = useState([]);
  const [blankRatings, setBlankRatings] = useState([]);

  useEffect(() => {
    //get learner_parent IDs
    const parentId = localStorage.getItem("parentId");
    axiosWithParentAuth()
      .get(`/api/parent/${parentId}`)
      .then(res => {
        setLearners(res.data);
        learners.forEach(learner =>
          axiosWithParentAuth()
            .get(`/api/ssrating/learnerParent/${learner.id}`)
            .then(ratings =>
              setBlankRatings([
                ...blankRatings,
                ratings.filter(rating => !rating.rating)
              ])
            )
        );
      });

    // get blank ratings with question data for each learner
  }, []);
  console.log(learners);
  console.log(blankRatings);

  return (
    <div>
      {blankRatings.map(rating => (
        <QuestionCard rating={rating} />
      ))}
    </div>
  );
};

export default UnansweredQuestionList;
