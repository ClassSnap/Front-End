import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../store/parentAuth/authActions";
import { connect } from "react-redux";

const ParentSignUpForm = ({ errors, touched, ...props }) => {
  return (
    <div className="parent-reg-form">
      <Form>
        <h1>Parent Registration Here</h1>
        <label>
          Name
          <Field type="text" name="name" placeholder="Name" />
        </label>
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <label>
          Relationship with Child
          <Field
            type="text"
            name="relationship"
            placeholder="Relationship with child"
          />
        </label>
        {touched.relationship && errors.relationship && (
          <p className="error">{errors.relationship}</p>
        )}
        <label>
          E-mail
          <Field type="text" name="email" placeholder="E-mail" />
        </label>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <label>
          Password
          <Field type="password" name="password" placeholder="Password" />
        </label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label>
          Confirm Password
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button>Register</button>
      </Form>

      <h4>Have an account already? Login In Here.</h4>
    </div>
  );
};

const FormikParentRegistrationForm = withFormik({
  mapPropsToValues({ name, relationship, email, password, confirmPassword }) {
    return {
      name: name || "",
      relationship: relationship || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    relationship: Yup.string().required(
      "Please provide your relationship with the child",
    ),
    email: Yup.string().required("Please enter your e-mail"),
    password: Yup.string()
      .min(8)
      .required("Please enter at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password confirm is required"),
  }),
  handleSubmit(values, { props }) {
    let parent = {
      parentName: values.name,
      parentEmail: values.email,
      parentPassword: values.password,
      relationship: values.relationship,
    };
    props.register(parent, props.history);
  },
})(ParentSignUpForm);

const mapPropsToState = state => {
  return {
    // isLoading: state.auth.isLoading,
    // error: state.auth.error,
  };
};

export default connect(
  mapPropsToState,
  { register },
)(FormikParentRegistrationForm);
