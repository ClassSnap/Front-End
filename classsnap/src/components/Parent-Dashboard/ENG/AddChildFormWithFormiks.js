import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";

const AddChildForm = ({ errors, touched, history, ...props }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className={
        props.showChildInfoForm ? "child-info-form" : "child-info-form off"
      }
    >
      <Form>
        <label>
          Child's First Name
          <Field
            type="text"
            name="firstName"
            placeholder="Child's First Name"
          />
          {touched.firstName && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
        </label>
        <label>
          Child's Last Name
          <Field type="text" name="lastName" placeholder="Child's Last Name" />
          {touched.lastName && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </label>
        <label>
          Child's Student ID
          <Field
            type="text"
            name="studentId"
            placeholder="Child's Student ID"
          />
          {touched.studentId && errors.studentId && (
            <p className="error">{errors.studentId}</p>
          )}
        </label>

        <Button>Continue</Button>
      </Form>

      <div className={showConfirm ? "showConfirm" : "showConfirm off"}></div>

      <Link to="/parent/dashboard">
        <Button>Back to Dashboard</Button>
      </Link>
    </div>
  );
};
const FormikAddChildForm = withFormik({
  mapPropsToValues({ firstName, lastName, studentId }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      studentId: studentId || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter your child's first name"),
    lastName: Yup.string().required("Please enter your child's last name"),
    studentId: Yup.string()
  }),

  handleSubmit(values, { resetForm, props }) {
    let newStudent = {
      firstName: values.firstName,
      lastName: values.lastName,
      studentId: values.studentId
    };
    let classId = props.classInfo.id;
    axiosWithParentAuth()
      .get(`/api/parent/findStudents/${classId}`)
      .then(studentInfo => {
        console.log(studentInfo.data);
        props.setClassStudents(studentInfo.data);
      });
    resetForm();
  }
})(AddChildForm);

export default FormikAddChildForm;
