import React from "react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const AddStudentForm = ({ errors, touched, ...props }) => {
  return (
    <div classname="add-student-form">
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
          Student ID
          <Field type="text" name="learnerCode" placeholder="Student ID" />
          )}
        </label>
        <button type="">Add More Students</button>
      </Form>
    </div>
  );
};

const FormikAddStudentForm = withFormik({
  mapPropsToValues({ firstName, lastName, learnerCode }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      learnerCode: learnerCode || ""
    };
  },
  validationSchema: yupToFormErrors.object().shape({
    firstName: Yup.string().required("Please enter student's first name"),
    lastName: Yup.string().required("Please enter student's last name")
  })
});
export default AddStudentForm;

//?? How to build a build-on form so that teachers can submit all students at once
