import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllQuestions } from "../../store/teachers/action";

//components
import ClassCard from "./ClassCard";
import axiosWithAuth from "../../utils/axiosWithAuth";

//Note: List is undefined despite the fact that it is fetched
//correctly, the data is not being rendered to the page.

const ClassList = props => {
  return (
    <div className="classlist">
      {props.list.map(info => (
        <ClassCard
          key={info.id}
          id={info.id}
          name={info.name}
          classCode={info.classCode}
          onClick={props.handleClick}
        />
      ))}
      <Link to="/teacher/addclass">
        <Button>Add Class</Button>
      </Link>
    </div>
  );
};

export default ClassList;
// function mapStateToProps(state) {
//   return {
//     isLoading: state.teacher.isLoading,
//     error: state.teacher.error,
//   };
// }

// export default connect(
//   mapStateToProps,
//   { getAllQuestions },
// )(ClassList);
