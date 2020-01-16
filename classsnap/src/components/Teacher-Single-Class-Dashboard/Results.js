import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { updateQuestion } from "../../store/teachers/action";
import { connect } from "react-redux";

//components
import Graph from "./Result-graph";

const Results = props => {
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState(props.question);
  const [targetQuestionId, setTargetQuestionId] = useState();
  const [updateQuestion, setUpdateQuestion] = useState({ question: "" });
  const [updateForView, setUpdateForView] = useState(props.question);
  const [showEdit, setShowEdit] = useState(false);
  const [updated, setUpdated] = useState(false);
  const oneStar = props.results.filter(result => result.rating === 1);
  const twoStar = props.results.filter(result => result.rating === 2);
  const threeStar = props.results.filter(result => result.rating === 3);
  const fourStar = props.results.filter(result => result.rating === 4);
  const fiveStar = props.results.filter(result => result.rating === 5);

  useEffect(() => {
    setShow(props.showResult);
    setTargetQuestionId(props.questionId);
    setQuestion(props.question);
  }, []);

  const EditClick = e => {
    console.log("clicked");
    setShowEdit(true);
  };

  const cancelEdit = e => {
    setShowEdit(false);
  };

  const handleChange = e => {
    setUpdateQuestion({ question: e.target.value });
    setUpdateForView(e.target.value);
  };

  const handleSubmit = () => {
    props.updateQuestion(targetQuestionId, updateQuestion);
    setQuestion(updateForView);
    setShowEdit(false);
    setUpdated(true);
    setShow(true);
  };

  return (
    //1. Render the question
    //2. Render the graph
    //3. Render List of Students

    <div className={show ? "resultList" : "resultList off"}>
      <Button onClick={props.clickReturn}>Back to Questions</Button>
      {showEdit ? (
        <Button color="pink" onClick={cancelEdit}>
          Cancel Edit
        </Button>
      ) : (
        <Button color="blue" onClick={EditClick}>
          Edit Question
        </Button>
      )}

      <Button
        color="black"
        onClick={() => props.handleDeleteQuestion(props.questionId)}
      >
        Delete Question
      </Button>
      <div className={showEdit ? "edit-form" : "edit-form off"}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={updateForView}
          ></input>

          <button type="submit">Submit Changes</button>
        </form>
      </div>
      <div className="question">
        {/* {props.results[0] ? <h1>{props.results[0].question}</h1> : null} */}
        <h2>{question}</h2>
      </div>
      <div className="result-graph">
        <Graph
          oneStar={oneStar}
          twoStar={twoStar}
          threeStar={threeStar}
          fourStar={fourStar}
          fiveStar={fiveStar}
        />
      </div>
      <div className="result">
        <div className="student-result">
          <h3>1</h3>
          {oneStar.map(student => (
            <h4 key={student.id}>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>2</h3>
          {twoStar.map(student => (
            <h4 key={student.id}>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>3</h3>
          {threeStar.map(student => (
            <h4 key={student.id}>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>4</h3>
          {fourStar.map(student => (
            <h4 key={student.id}>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>5</h3>
          {fiveStar.map(student => (
            <h4 key={student.id}>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.teacher.isLoading,
    error: state.teacher.error
  };
};

export default connect(mapStateToProps, { updateQuestion })(Results);
