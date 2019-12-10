import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { addQuestion } from "../../store/teachers/action";
import { connect } from "react-redux";

const AddQuestionForm = () => {
  const [list, setList] = useState([]);
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
    <div className="add-question-form">
      <Form className="form">
        <h2>Extend Your Impact to Outside the Classroom</h2>
        <h3>Send Your Question Here</h3>
        <div className="basic-info">
          <div className="class">
            <label>Class</label>
            <Field component="select" name="session" class="option">
              <option value="default">Select</option>
              {list.map(clase => (
                <option value={clase.id}>{clase.name}</option>
              ))}
            </Field>
          </div>
          <div className="subject">
            <label>Subject </label>
            <Field component="select" name="subject" class="option">
              <option value="select">Select</option>
              <option value="elar">ELAR</option>
              <option value="math">Math</option>
              <option value="sci">Science</option>
              <option value="socio">Social Studies</option>
              <option value="lang">Foreign Languages</option>
              <option value="socialemotional">Social Emotional Learning</option>
            </Field>
          </div>
          <div className="date">
            <label>Due Date</label>
            <Field type="date" name="date" />
          </div>
        </div>

        <Field
          component="textarea"
          name="question"
          class="inputQ"
          placeholder="Enlightening question starts here..."
        />

        <button className="submit" type="submit">
          Submit
        </button>
      </Form>
      <Link to="/teacher/dashboard">
        <h4>Back to Dashboard</h4>
      </Link>
    </div>
  );
};

const FormikAddQuestionForm = withFormik({
  mapPropsToValues({ session, subject, question }) {
    return {
      session: session || "",
      subject: subject || "",
      question: question || ""
    };
  },

  validationSchema: Yup.object().shape({
    session: Yup.required,
    subject: Yup.required,
    question: Yup.string(20).required
  }),

  handleSubmit(values, { resetForm, props }) {
    let question = {
      question: values.question,
      questionType: values.subject,
      date: values.date,
      classId: values.session //should map class id and use it to pass results
    };
    console.log(question);
    props.addQuestion(question, props.history);
    const students = axiosWithAuth().get(`/api/student/class/${values.session}`);
    console.log(students);
    resetForm();
    //redux submit function here
  }
})(AddQuestionForm);

const mapStateToProps = state => {
  return {
    isLoading: state.teacher.isLoading,
    error: state.teacher.error
  };
};

export default connect(mapStateToProps, { addQuestion })(FormikAddQuestionForm);
