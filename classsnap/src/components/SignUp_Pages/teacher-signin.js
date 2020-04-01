import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/teacherAuth/authActions";

import * as Yup from "yup";

const Login = ({ errors, touched, ...props }) => {
  return (
    <div className="sign-in-form">
      <div className="form-header">
       <h1 className="topic">
          Teacher Sign In</h1>
          <h4>
            (Not a teacher? Click <Link to="/">here</Link>)
          </h4>
     </div>
      <Form className="input-field">
       

        <Field type="text" name="username" placeholder="E-mail" className="signin-field"/>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Password" className="signin-field"/>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        {props.isLoading ? (
          <Button loading className="signin-field-button">Loading</Button>
        ) : (
          <Button type="submit" className="signin-field-button">Submit</Button>
        )}
      </Form>
      
        <h4 className="sign-in-note">
        Don't have an account yet? Sign Up <Link to="/teachersignup">here</Link>
        .
      </h4>
      
    </div>
  );
};

//Higher order component
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6)
      .required("Password with at least 6 characters is required.")
  }),

  handleSubmit(values, { resetForm, props }) {
    let credentials = {
      teacherEmail: values.username,
      teacherPassword: values.password
    };

    props.login(credentials, props.history);
    resetForm();
  }
})(Login);

const mapStateToProps = state => {
  return {
    isLoading: state.teacherAuth.isLoading,
    error: state.teacherAuth.error
  };
};

export default connect(mapStateToProps, { login })(FormikLoginForm);
