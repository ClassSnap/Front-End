import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { login } from "../../store/parentAuth/authActions";
import axios from "axios";
import * as Yup from "yup";

const LoginSPN = ({ errors, touched, ...props }) => {
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
      <Form>
        <h1>Cuenta de acceso</h1>

        <Field type="text" name="username" placeholder="Correo electrónico" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="Contraseña" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        {props.isLoading ? (
          <Button loading>Loading</Button>
        ) : (
          <Button type="submit">Enviar</Button>
        )}
      </Form>
      <FacebookLogin
        appId="1154927471565693"
        autoLoad
        callback={responseFacebook}
        fields="name,email,picture"
        render={renderProps => (
          <button onClick={renderProps.onClick}>
            This is my custom FB button
          </button>
        )}
      />
      <h4>
        ¿No tienes cuenta? Registrarte <Link to="/parentsignup">aquí</Link>
      </h4>
    </div>
  );
};

//Higher order component
const FormikLoginFormSPN = withFormik({
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
    // console.log("form submitted", credentials);
    props.login(credentials, props.history);
    resetForm();
  }
})(LoginSPN);

const mapStateToProps = state => {
  return {
    isLoading: state.parentAuth.isLoading,
    error: state.parentAuth.error
  };
};

export default connect(mapStateToProps, { login })(FormikLoginFormSPN);
