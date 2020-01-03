import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";

import AddChildInfo from "./AddChildInfoForm";

const AddChildForm = () => {
  const [classCode, setClassCode] = useState({ classCode: "" });
  const [message, setMessage] = useState("");
  const [showChildInfoForm, setShowChildInfoForm] = useState(false);
  const [classInfo, setClassInfo] = useState({});

  const handleClassCodeChange = event => {
    setClassCode({ classCode: event.target.value });
  };

  const handleClassSearchSubmit = () => {
    axiosWithParentAuth()
      .post(`/api/parent/findClass/`, classCode)
      .then(confirm => {
        console.log(confirm.data);
        if (confirm.data.length === 0) {
          setMessage("Invalid Class Code. Please enter a valid class code. ");
          setShowChildInfoForm(false);
        } else {
          setMessage("Class found. Enter your child's information to continue");
          setShowChildInfoForm(true);
          setClassInfo(confirm.data[0]);
        }
      })
      .catch(error => {
        console.log(error);
        setMessage(
          "Invalid Class Code. Please re-enter your code or check with your child's teacher"
        );
      });
  };

  console.log(message);
  console.log(classInfo);
  return (
    <div>
      <h1>Follow the Instruction to Add your Child</h1>
      <div className="class-search">
        <form className="class-search-form" onSubmit={handleClassSearchSubmit}>
          <h3>Search your child's class with class code</h3>
          <input
            type="text"
            class="classCode"
            placeholder="Enter class code"
            onChange={handleClassCodeChange}
          ></input>
          <button type="submit">Search Class</button>
          <h3>{message}</h3>
        </form>
      </div>
      <div className="child-info-form">
        <AddChildInfo
          showChildInfoForm={showChildInfoForm}
          classInfo={classInfo}
        />
      </div>
    </div>
  );
};

export default AddChildForm;
