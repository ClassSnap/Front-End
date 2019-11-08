import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { addClass } from "../../store/teachers/action";
import { connect } from "react-redux";

const AddClassForm = ({ errors, touched, ...props }) => {
  return (
    <div className="add-classform">
      <Form>
        <h1>Add A Class</h1>
        <label>
          Class Name
          <Field type="text" name="name" placeholder="Class Name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </label>
        <label>
          Subject
          <Field type="text" name="subject" placeholder="Subject" />
          {touched.subject && errors.subject && (
            <p className="error">{errors.subject}</p>
          )}
        </label>
        <label>
          Grade Level
          <Field component="select" name="gradeLevel" className="option">
            <option value="default">Select</option>
            <option value="Pre-K">Pre-K</option>
            <option value="Kinder">Kindergarten</option>
            <option value="1st">1st grade</option>
            <option value="2nd">2nd grade</option>
            <option value="3rd">3rd grade</option>
            <option value="4th">4th grade</option>
            <option value="5th">5th grade</option>
            <option value="6th">6th grade</option>
            <option value="7th">7th grade</option>
            <option value="8th">8th grade</option>
            <option value="9th">9th grade</option>
            <option value="10th">10th grade</option>
            <option value="11th">11th grade</option>
            <option value="12th">12th grade</option>
            <option value="mixed">--Mixed Grade Level--</option>
            <option value="prek-k">PreK - K</option>
            <option value="lowerEl">Lower Elementary</option>
            <option value="upperEl">Upper Elementary</option>
            <option value="middleSchool">Middle School</option>
            <option value="highSchool">High School</option>
          </Field>
          {/* // <Field type="text" name="gradeLevel" placeholder="Grade Level" />
          // {touched.gradeLevel && errors.gradeLevel && (
          <p className="error">{errors.gradeLevel}</p>
          )} */}
        </label>
        <label>
          Class Rigor (Example: Regular, College Prep, AP etc.)
          <Field type="text" name="classRigor" placeholder="Class Rigor" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikAddClassForm = withFormik({
  mapPropsToValues({ name, subject, gradeLevel, classRigor }) {
    return {
      name: name || "",
      subject: subject || "",
      gradeLevel: gradeLevel || "",
      classRigor: classRigor || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a class name"),
    subject: Yup.string().required("Please enter a subject"),
    gradeLevel: Yup.string().required("Please select a grade level"),
  }),
  handleSubmit(values, { resetForm, props }) {
    let newItem = {
      name: values.name,
      subject: values.subject,
      gradeLevel: values.gradeLevel,
      classRigor: values.classRigor,
      classCode: Math.random()
        .toString(36)
        .slice(2),
      teacherId: localStorage.getItem("teacherId"),
    };
    props.addClass(newItem, props.history);
    resetForm();
  },
})(AddClassForm);

const mapStateToProps = state => {
  return {
    isLoading: state.teacher.isLoading,
    error: state.teacher.error,
  };
};

export default connect(
  mapStateToProps,
  { addClass },
)(FormikAddClassForm);
