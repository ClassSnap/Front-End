import React, { useContext } from "react";

//context
import { QuestionContext } from "../../contexts/QuestionContext";
import { StudentDataContext } from "../../contexts/StudentDataContext";

const QuestionResult = () => {
  const { sampleQuestions } = useContext(QuestionContext);
  const { sampleStudentData } = useContext(StudentDataContext);
  const questionOne = sampleQuestions[0];
  const studentData = sampleStudentData[0];

  return (
    <div className="teacher-question-result">
      <h2>
        {studentData.subject} Question of {studentData.date}{" "}
      </h2>
      <div className="question-from-teacher">
        <h3>{studentData.question}</h3>
      </div>
      <h3>Parent Rating</h3>
      <div className="student-results">
        <div className="student-rating">
          <div className="rateclass rateOne">
            <div className="rate">
              <h3>1</h3>
            </div>
            <div className="student-rate">
              {studentData.rateOne.map(item => (
                <p>{item.name}</p>
              ))}
            </div>
          </div>

          <div className="rateclass rateTwo">
            <div className="rate">
              <h3>2</h3>
            </div>
            <div className="student-rate">
              {studentData.rateTwo.map(item => (
                <p>{item.name}</p>
              ))}
            </div>
          </div>

          <div className="rateclass rateThree">
            <div className="rate">
              <h3>3</h3>
            </div>
            <div className="student-rate">
              {studentData.rateThree.map(item => (
                <p>{item.name}</p>
              ))}
            </div>
          </div>

          <div className="rateclass rateFour">
            <div className="rate">
              <h3>4</h3>
            </div>
            <div className="student-rate">
              {studentData.rateFour.map(item => (
                <p>{item.name}</p>
              ))}
            </div>
          </div>

          <div className="rateclass rateFive">
            <div className="rate">
              <h3>5</h3>
            </div>
            <div className="student-rate">
              {studentData.rateFive.map(item => (
                <p>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;

//add graph
