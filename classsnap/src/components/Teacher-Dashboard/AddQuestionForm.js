import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddQuestionForm = () => {
  return (
    <div className="question-form">
      <Form className="form">
        <h2>Extend Your Impact to Outside the Classroom</h2>
        <h3>Send Your Question Here</h3>
        <div className="basic-info">
          <div className="class">
            <label>Class</label>
            <Field component="select" name="session" class="option">
              <option value="default">Select</option>
              <option value="classOne">Class 1</option>
              <option value="classTwo">Class 2</option>
              <option value="classThree">Class 3</option>
              <option value="classFour">Class 4</option>
              <option value="classFive">Class 5</option>
              <option value="classSix">Class 6</option>
              <option value="classSeven">Class 7</option>
              <option value="classEight">Class 8</option>
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
            </Field>
          </div>
          <div className="date">
            <label>Due Date</label>
            <Field type="date" name="duedate" />
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
    </div>
  );
};

const FormikAddQuestionForm = withFormik({
  mapPropsToValues({ session, subject, question }) {
    return {
      session: session || "",
      subject: subject || "",
      question: question || "",
    };
  },

  validationSchema: Yup.object().shape({
    session: Yup.required,
    subject: Yup.required,
    question: Yup.string(20).required,
  }),

  handleSubmit(values, { resetForm }) {
    axios.post("https://reqres.in/api/users", values).then(res => {
      console.log(res);
      resetForm();
    });
  },
})(AddQuestionForm);

export default FormikAddQuestionForm;
