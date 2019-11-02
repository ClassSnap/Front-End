import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../store/teacherAuth/authActions";

import { connect } from "react-redux";

const TeacherSignUpForm = ({ errors, touched, ...props }) => {
  return (
    <div className="teacher-reg-form">
      <Form>
        <h1>Teacher Registration Here</h1>
        <label>
          Prefix
          <Field as="text" name="prefix" placeholder="Prefix" />
        </label>

        <label>
          First Name
          <Field type="text" name="firstName" placeholder="First Name" />
        </label>
        {touched.firstName && errors.firstName && (
          <p className="error">{errors.firstName}</p>
        )}

        <label>
          Last Name
          <Field type="text" name="lastName" placeholder="Last Name" />
        </label>
        {touched.lastName && errors.lastName && (
          <p className="error">{errors.lastName}</p>
        )}
        <label>
          School Name
          <Field type="text" name="schoolName" placeholder="School Name" />
        </label>
        <label>
          City
          <Field type="text" name="city" placeholder="City" />
        </label>
        <label>
          State
          <Field type="text" name="state" placeholder="state" />
        </label>
        <label>
          E-mail
          <Field type="text" name="email" placeholder="Email" />
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

const FormikTeacherRegistrationForm = withFormik({
  mapPropsToValues({
    prefix,
    lastName,
    firstName,
    schoolName,
    city,
    state,
    email,
    password,
    confirmPassword,
  }) {
    return {
      prefix: prefix || "",
      firstName: firstName || "",
      lastName: lastName || "",
      schoolName: schoolName || "",
      city: city || "",
      state: state || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
    lastName: Yup.string().required("Please enter your last name"),
    firstName: Yup.string().required("Please enter your first name"),
    email: Yup.string().required("Please enter your e-mail"),
    password: Yup.string()
      .min(8)
      .required("Please enter at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password confirm is required"),
  }),
  handleSubmit(values, { props }) {
    let teacher = {
      prefix: values.prefix,
      teacherFirstName: values.firstName,
      teacherLastName: values.lastName,
      teacherEmail: values.email,
      teacherPassword: values.password,
      schoolName: values.schoolName,
      city: values.city,
      state: values.state,
    };
    props.register(teacher, props.history);
  },
})(TeacherSignUpForm);

const mapPropsToState = state => {
  return {
    // isLoading: state.auth.isLoading,
    // error: state.auth.error,
  };
};

export default connect(
  mapPropsToState,
  { register },
)(FormikTeacherRegistrationForm);
