import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllQuestions } from "../../store/teachers/action";

//components
import ClassCard from "./ClassCard";
import axiosWithAuth from "../../utils/axiosWithAuth";

//Note: List is undefined despite the fact that it is fetched
//correctly, the data is not being rendered to the page.

const ClassList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const teacherId = localStorage.getItem("teacherId");
      await axiosWithAuth()
        .get(`/api/teacher/${teacherId}`)
        .then(teacher => {
          setList(teacher.data.classes);
        });
    }
    fetchList();
  }, []);

  const handleClick = (id, name, classCode) => {
    props.getAllQuestions(id, name, classCode, props.hist);
  };

  return (
    <div className="classlist">
      {list.map(info => (
        <ClassCard
          key={info.id}
          id={info.id}
          name={info.name}
          classCode={info.classCode}
          onClick={handleClick}
        />
      ))}
      <Link to="/teacher/addclass">
        <button>Add Class</button>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoading: state.teacher.isLoading,
    error: state.teacher.error,
  };
}

export default connect(
  mapStateToProps,
  { getAllQuestions },
)(ClassList);
