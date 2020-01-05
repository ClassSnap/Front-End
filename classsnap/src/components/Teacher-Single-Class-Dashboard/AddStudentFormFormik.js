import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addStudent } from "../../store/teachers/action";

const AddStudentForm = ({ errors, touched, ...props }) => {
  const [list, setList] = useState([]);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    async function fetchClase() {
      const teacherId = localStorage.getItem("teacherId");
      await axiosWithAuth()
        .get(`/api/class/${teacherId}`)
        .then(clase => {
          setList(clase.data.info);
        });
    }
    fetchClase();
  }, []);
  return (
    <div classname="add-student-form">
      <Form>
        <h2>Add Student</h2>
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
        {/* <label>
          Birthdate
          <Field type="date" name="birthdate" />
        </label> */}
        <label>
          Student ID
          <Field type="text" name="studentId" placeholder="Student ID" />
        </label>

        <label>Class </label>
        <Field component="select" name="sessionName" class="option">
          <option value="default">Please select</option>
          {list.map(session => (
            <option value={session.id}>{session.name}</option>
          ))}
        </Field>

        <button type="">Add Student</button>
        <h4 className={showError ? "show-error" : "show-error off"} />
      </Form>
      <Link to="/teacher/dashboard">
        <Button>Return to Dashboard</Button>
      </Link>
    </div>
  );
};

const FormikAddStudentForm = withFormik({
  mapPropsToValues({ firstName, lastName, birthdate, studentId, sessionName }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      // birthdate: birthdate || "",
      studentId: studentId || "",
      sessionName: sessionName || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter student's first name"),
    lastName: Yup.string().required("Please enter student's last name")
  }),
  async handleSubmit(values, { resetForm, props }) {
    let newStudent = {
      lastName: values.lastName,
      firstName: values.firstName,
      // birthdate: values.birthdate,
      learnerCode: values.studentId
    };
    let classId = parseInt(values.sessionName, 10);

    await props.addStudent(newStudent, classId);
    resetForm();
  }
})(AddStudentForm);

const mapStateToProps = state => {
  return {
    isLoading: state.teacher.isLoading,
    error: state.teacher.error,
    message: state.teacher.message
  };
};

export default connect(mapStateToProps, { addStudent })(FormikAddStudentForm);

// const mapStateToProps = state => {
//   return {};
// };
// export default connect(mapStateToProps)(FormikAddStudentForm);

//?? How to build a build-on form so that teachers can submit all students at once
