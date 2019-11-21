import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import AddStudentForm from "./AddStudentForm";

const AddStudentView = () => {
  const [studentList, setStudentList] = useState([
    { lastName: "", firstName: "", birthdate: "" }
  ]);

  const AddStudentClick = () => {
    setStudentList([
      ...studentList,
      { lastName: "", firstName: "", birthdate: "" }
    ]);
  };

  const handleChange = event => {
    // setStudentList( {(event.target.name]: event.target.value});
    // this.setState({
    //   studentList: [...this.state.studentList]
    //   [event.target.name]: event.target.value
    // })
  };

  return (
    <div className="add-student-view">
      <h1>Add Student Here</h1>

      {studentList.map((student, index) => (
        <AddStudentForm key={index} onChange={handleChange} />
      ))}
      <Button onClick={AddStudentClick}>Add Student</Button>
    </div>
  );
};

export default AddStudentView;
