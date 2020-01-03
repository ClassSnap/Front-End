import React, { useState } from "react";
import axiosWithAuth from "../../../utils/axiosWithParentAuth";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";
import ConfirmForm from "./ConfirmForm";

const AddChildInfo = props => {
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    learnerCode: ""
  });
  const [classStudents, setClassStudents] = useState([]);
  const [confirmStudent, setConfirmStudent] = useState([]);
  const [showConfirmForm, setShowConfirmForm] = useState(false);

  const handleStudentInfoChange = event => {
    setStudentInfo({
      ...studentInfo,
      [event.target.name]: event.target.value
    });
  };

  const submitStudentInfo = async event => {
    event.preventDefault();
    let classId = props.classInfo.id;
    console.log(classId);
    await axiosWithParentAuth()
      .get(`/api/parent/findStudents/${classId}`)
      .then(info => {
        console.log(info.data);
        setClassStudents(info.data);
        console.log(studentInfo);
        let confirm = info.data.filter(student => {
          return (
            student.firstName === studentInfo.firstName &&
            student.lastName === studentInfo.lastName &&
            student.learnerCode === studentInfo.learnerCode
          );
        });
        console.log(confirm);
        setConfirmStudent(confirm);
      });
    setShowConfirmForm(true);
  };

  return (
    <div
      className={
        props.showChildInfoForm ? "show-child-info" : "show-child-info off"
      }
    >
      <form onSubmit={submitStudentInfo}>
        <label>
          Child's First Name
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleStudentInfoChange}
          ></input>
        </label>
        <label>
          Child's Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleStudentInfoChange}
          ></input>
        </label>
        <label>
          Child's Student ID
          <input
            type="text"
            name="learnerCode"
            placeholder="Student ID"
            onChange={handleStudentInfoChange}
          ></input>
        </label>
        <button type="submit">Continue</button>
      </form>
      <ConfirmForm
        confirmStudent={confirmStudent}
        showConfirmForm={showConfirmForm}
      />
    </div>
  );
};

export default AddChildInfo;
