import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/parentAuth/authActions";
import axios from "axios";
import * as Yup from "yup";

const Login = ({ errors, touched }) => {
  return (
    <div className="sign-in-form">
      <Form>
        <h1>
          Parent Sign In
          <h4>
            (Not a parent? Click <Link to="/">here</Link>)
          </h4>
        </h1>

        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit">Submit</button>
      </Form>

      <h4>
        Don't have an account yet? Sign Up <Link to="/parentsignup">here</Link>
      </h4>
    </div>
  );
};

//Higher order component
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6)
      .required("Password with at least 6 characters is required."),
  }),

  handleSubmit(values, { resetForm, props }) {
    let credentials = {
      parentEmail: values.username,
      parentPassword: values.password,
    };
    console.log("form submitted", credentials);
    props.login(credentials, props.history);
    resetForm();
  },
})(Login);

const mapStateToProps = state => {
  return {
    isLoading: state.parentAuth.isLoading,
    error: state.parentAuth.error,
  };
};

export default connect(
  mapStateToProps,
  { login },
)(FormikLoginForm);
