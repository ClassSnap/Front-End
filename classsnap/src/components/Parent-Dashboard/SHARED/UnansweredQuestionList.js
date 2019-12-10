import React, { useState, useEffect } from 'react';
import axiosWithParentAuth from "../../utils/axiosWithParentAuth";

const UnansweredQuestionList = () => {

    const [questionList, setQuestionList] = useState([]);
    
    useEffect(() => {
        //getQuestionsBy
    })

    return (
        <div>
            {questionList.map}
        </div>
    )
    
}

export default UnansweredQuestionList;