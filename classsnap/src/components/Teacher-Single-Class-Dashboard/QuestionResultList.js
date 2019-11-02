import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

//component
import QuestionResultCard from "./QuestionResultCard";

//context
import { StudentDataContext } from "../../contexts/StudentDataContext";

//data
import { sampleStudentData } from "../../data";

const QuestionResultList = () => {
  const { sampleStudentData } = useContext(StudentDataContext);

  return (
    <div className="question-result-list">
      {sampleStudentData.map(item => (
        <QuestionResultCard
          key={item.date}
          header={`${item.subject} Question for ${item.class}`}
          date={item.date}
          average={item.average}
        />
      ))}
    </div>
  );
};

export default QuestionResultList;
