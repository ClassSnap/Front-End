import React from "react";

//components
import Graph from "./Result-graph";

const Results = props => {
  const oneStar = props.results.filter(result => result.rating === 1);
  const twoStar = props.results.filter(result => result.rating === 2);
  const threeStar = props.results.filter(result => result.rating === 3);
  const fourStar = props.results.filter(result => result.rating === 4);
  const fiveStar = props.results.filter(result => result.rating === 5);

  return (
    //1. Render the question
    //2. Render the graph
    //3. Render List of Students

    <div className={props.showResult ? "resultList" : "resultList off"}>
      <div className="question">
        <h1>{props.results.question}</h1>
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
            <h4>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>2</h3>
          {twoStar.map(student => (
            <h4>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>3</h3>
          {threeStar.map(student => (
            <h4>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>4</h3>
          {fourStar.map(student => (
            <h4>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
        <div className="student-result">
          <h3>5</h3>
          {fiveStar.map(student => (
            <h4>
              {student.firstName} {student.lastName}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
