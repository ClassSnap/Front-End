import React, { useContext } from "react";

//component
import ParentNewQuestionCard from "./Parent-NewQuestionCard";

//context
import { QuestionContext } from "../../contexts/QuestionContext";
import { Item } from "semantic-ui-react";

const ParentNewQuestionList = () => {
  const { sampleQuestions } = useContext(QuestionContext);

  return (
    <div className="question-list">
      {sampleQuestions.map(item => (
        <ParentNewQuestionCard
          key={item.date}
          subject={item.subject}
          teacher={item.teacher}
          date={item.date}
          question={item.question}
        />
      ))}
    </div>
  );
};

export default ParentNewQuestionList;
