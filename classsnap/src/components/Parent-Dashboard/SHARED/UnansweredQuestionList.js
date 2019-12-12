import React, { useState, useEffect } from 'react';
import axiosWithParentAuth from "../../utils/axiosWithParentAuth";
import QuestionCard from "./QuestionCard";

const UnansweredQuestionList = () => {

    const [learners, setLearners] = useState([]);
    const [blankRatings, setBlankRatings] = useState([]);
    
    useEffect( async () => {
        //get learner_parent IDs
        await axiosWithParentAuth()
            .get(`/api/parent/${localStorage.getItem("parentId")}`)
            .then(learners => setLearners(learners))
        //get blank ratings with question data for each learner
        learners.forEach(learner =>
            axiosWithParentAuth()
                .get(`/api/ssrating/learnerParent/${learner.id}`))
                .then(ratings => setBlankRatings(
                    [...blankRatings, ratings.filter(rating => !rating.rating)]
                ))
        
    })

    return (
        <div>
            {blankRatings.map(rating => {
                <QuestionCard rating={rating}/>
            })}
        </div>
    )
    
}

export default UnansweredQuestionList;