import React from "react";

const AddStudentForm = props => {
  return (
    <div className="add-student-form">
      <form>
        Student First Name:
        <input type="text" name="firstname" onChange={props.onChange} />
        Student Last Name:
        <input type="text" name="lastname" onChange={props.onChange} />
        Student Birthdate:
        <input type="date" name="date" onChange={props.onChange} />
      </form>
    </div>
  );
};

export default AddStudentForm;
