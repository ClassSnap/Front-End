import React from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";

const AddChildForm = ({ errors, touched, history, ...props }) => {
  //   const clickReturn = () => {
  //     history.push("/parent/dashboard");
  //   };
  return (
    <div className="add-child-form">
      <Link to="/parent/dashboard">
        <Button>Back to Dashboard</Button>
      </Link>
      <Form>
        <h1>Add Your Child</h1>
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
          Child's Birthdate
          <Field type="date" name="birthdate" />
          {touched.birthdate && errors.birthdate && (
            <p className="error">{errors.birthdate}</p>
          )}
        </label>
        <label>
          Class Code
          <Field type="text" name="classCode" placeholder="Class Code" />
          {touched.classCode && errors.classCode && (
            <p className="error">{errors.classCode}</p>
          )}
        </label>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

const FormikAddChildForm = withFormik({
  mapPropsToValues({ firstName, lastName, birthdate, classCode }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      birthdate: birthdate || "",
      classCode: classCode || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter your child's first name"),
    lastName: Yup.string().required("Please enter your child's last name"),
    birthdate: Yup.string().required(
      "Please enter your child's birthdate for validation"
    ),
    classCode: Yup.string().required("Please enter your child's class code")
  }),
  handleSubmit(values, { resetForm, props }) {
    let newStudent = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthdate: values.birthdate,
      classCode: values.classCode
    };
    resetForm();
  }
})(AddChildForm);

export default FormikAddChildForm;
