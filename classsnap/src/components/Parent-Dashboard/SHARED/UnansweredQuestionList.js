import React, { useState, useEffect } from 'react';
import axiosWithParentAuth from "../../utils/axiosWithParentAuth";
import QuestionCard from "./QuestionCard";

const UnansweredQuestionList = () => {

    const [blankRatings, setBlankRatings] = userState([]);
    const [questionList, setQuestionList] = useState([]);
    
    useEffect(() => {
        //getBlankRatingsByParentId
        axiosWithParentAuth()
            .get("/api/rating")
            .then(ratings => setBlankRatings(ratings.filter(rating => !rating.rating)))
    })

    return (
        <div>
            {questionList.map(question => {
                question.
                <QuestionCard question={question}/>
            })}
        </div>
    )
    
}

export default UnansweredQuestionList;