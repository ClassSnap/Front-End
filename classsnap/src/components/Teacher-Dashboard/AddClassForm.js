import React, { useState } from "react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const AddClassForm = ({ errors, touched, ...props }) => {
  return (
    <div className="add-class-form">
      <Form>
        <h1>Add A Class</h1>
        <label>
          Class Name
          <Field type="text" name="name" placeholder="Class Name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </label>
        <label>
          Subject
          <Field type="text" name="subject" placeholder="Subject" />
          {touched.subject && errors.subject && (
            <p className="error">{errors.subject}</p>
          )}
        </label>
        <label>
          Class Name
          <Field type="text" name="gradeLevel" placeholder="Grade Level" />
          {touched.gradeLevel && errors.gradeLevel && (
            <p className="error">{errors.gradeLevel}</p>
          )}
        </label>
        <label>
          Class Rigor (Example: Regular, College Prep, AP etc.)
          <Field type="text" name="classRigor" placeholder="Class Rigor" />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikAddClassForm = withFormik({
  mapPropsToValues({ name, subject, gradeLevel, classRigor }) {
    return {
      name: name || "",
      subject: subject || "",
      gradeLevel: gradeLevel || "",
      classRigor: classRigor || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a class name"),
    subject: Yup.string().required("Please enter a subject"),
    gradeLevel: Yup.string().required("Please enter a grade level"),
  }),
  handleSubmit(values, { props }) {
    let newItem = {
      name: values.name,
      subject: values.subject,
      gradeLevel: values.gradeLevel,
      classRigor: values.classRigor,
      classCode: "", //generate random number string here,,
      teacherId: localStorage.getItem("teacherId"),
    };
    props.addClass(newItem, props.history);
  },
})(AddClassForm);

export default FormikAddClassForm;
