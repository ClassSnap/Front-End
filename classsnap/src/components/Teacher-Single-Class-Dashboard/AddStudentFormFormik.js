import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

const AddStudentForm = ({ errors, touched, ...props }) => {
  return (
    <div classname="add-student-form">
      <Link to="/teacher/dashboard">
        <Button>Return to Dashboard</Button>
      </Link>
      <Form>
        <label>
          First Name
          <Field type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
        </label>
        <label>
          Last Name
          <Field type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </label>
        <label>
          Birthdate
          <Field type="date" name="birthdate" />
        </label>
        <button type="">Add More Students</button>
      </Form>
    </div>
  );
};

const FormikAddStudentForm = withFormik({
  mapPropsToValues({ firstName, lastName, birthdate }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      birthdate: birthdate || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter student's first name"),
    lastName: Yup.string().required("Please enter student's last name")
  })
})(AddStudentForm);

export default FormikAddStudentForm;
// const mapStateToProps = state => {
//   return {};
// };
// export default connect(mapStateToProps)(FormikAddStudentForm);

//?? How to build a build-on form so that teachers can submit all students at once
