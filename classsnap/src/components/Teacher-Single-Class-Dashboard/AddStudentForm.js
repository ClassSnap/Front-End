import React from "react";

const AddStudentForm = () => {
  return (
    <div className="add-student-form">
      <h1>Add Student Form</h1>
      <form>
        Student First Name:
        <input type="text" name="firstname" />
        Student Last Name:
        <input type="text" name="lastname" />
        Student Birthdate:
        <input type="date" name="date" />
      </form>
    </div>
  );
};

export default AddStudentForm;
