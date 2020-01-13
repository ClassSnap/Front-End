import React from "react";
import { Button } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../store/parentAuth/authActions";
import { connect } from "react-redux";

const ParentSignUpForm = ({ errors, touched, ...props }) => {
  return (
    <div className="parent-reg-form">
      <Link to="/parentsignupspn">
        <Button>En Español</Button>
      </Link>
      <Form>
        <h1>
          Parent Registration
          <h4>
            (Not a parent? Click <Link to="/">here</Link>)
          </h4>
        </h1>
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
        <h4 id="passwordwarning">
          **Please write down your password as the reset password function is
          not available yet**
        </h4>

        <label>Preferred Language</label>
        <Field component="select" name="language" class="option">
          <option value="default">Please select</option>
          <option value="English">English</option>
          <option value="Spanish">Español</option>
        </Field>
        {touched.language && errors.language && (
          <p className="error">{errors.language}</p>
        )}
        <h4>
          By submitting registration, you are agreeing to our{" "}
          <a href="/terms">Terms and Conditions</a>.
        </h4>
        {props.isLoading ? (
          <Button loading>Loading</Button>
        ) : (
          <Button type="submit">Register</Button>
        )}
      </Form>

      <h4>
        Have an account already? Login In <Link to="/parentlogin">here</Link>.
      </h4>
    </div>
  );
};

const FormikParentRegistrationForm = withFormik({
  mapPropsToValues({
    name,
    relationship,
    email,
    password,
    confirmPassword,
    language
  }) {
    return {
      name: name || "",
      relationship: relationship || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      language: language || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    relationship: Yup.string().required(
      "Please provide your relationship with the child"
    ),
    email: Yup.string().required("Please enter your e-mail"),
    password: Yup.string()
      .min(8)
      .required("Please enter at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password confirm is required"),
    language: Yup.string().required("Please select your preferred language")
  }),
  handleSubmit(values, { props }) {
    let parent = {
      parentName: values.name,
      parentEmail: values.email,
      parentPassword: values.password,
      relationship: values.relationship,
      language: values.language
    };
    console.log(parent);
    props.register(parent, props.history);
  }
})(ParentSignUpForm);

const mapPropsToState = state => {
  return {
    isLoading: state.parentAuth.isLoading,
    error: state.parentAuth.error
  };
};

export default connect(mapPropsToState, { register })(
  FormikParentRegistrationForm
);
