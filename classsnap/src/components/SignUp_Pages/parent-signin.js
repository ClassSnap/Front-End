import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { login } from "../../store/parentAuth/authActions";
import axios from "axios";
import * as Yup from "yup";

const Login = ({ errors, touched, ...props }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    userId: "",
    name: "",
    email: "",
    picture: ""
  });

  const responseFacebook = response => {
    console.log(response);
  };
  return (
    <div className="sign-in-form">
      <div className="form-header">
       <h1 className="topic">
          Parent Sign In</h1>
          <h4>
            (Not a parent? Click <Link to="/">here</Link>)
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
      <div className="Oauth">
      <FacebookLogin
  
        appId="1154927471565693"
        autoLoad
        callback={responseFacebook}
        fields="name,email,picture"
        render={renderProps => (
          <button onClick={renderProps.onClick} >
            This is my custom FB button
          </button>
        )}
      />
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
         </div>
      <h4 className="sign-in-note">
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
      parentEmail: values.username,
      parentPassword: values.password
    };
    console.log("form submitted", credentials);
    props.login(credentials, props.history);
    resetForm();
  }
})(Login);

const mapStateToProps = state => {
  return {
    isLoading: state.parentAuth.isLoading,
    error: state.parentAuth.error
  };
};

export default connect(mapStateToProps, { login })(FormikLoginForm);
