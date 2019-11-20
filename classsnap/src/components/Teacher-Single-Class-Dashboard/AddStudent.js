import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";

import FormikAddStudentForm from "./AddStudentFormFormik";

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState([
    { lastName: "", firstName: "", birthdate: "" }
  ]);

  const handleChange(i, event) => {
      const values = [...newStudent];
      values[i] = event.target.value
      setNewStudent(values);
  }

  const handleClick = () => {};
  return (
    <div className="">
      <FormikAddStudentForm />
      <Button onClick>Add More Student</Button>
      {newStudent.map(each => (
        <FormikAddStudentForm />
      ))}
      <Button>Submit</Button>
    </div>
  );
};

export default AddStudent;
