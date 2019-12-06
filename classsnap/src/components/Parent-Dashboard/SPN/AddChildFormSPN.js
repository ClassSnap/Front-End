import React from "react";
import { Form, Field, withFormik } from "formik";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";

const AddChildFormSPN = ({ errors, touched, history, ...props }) => {
  //   const clickReturn = () => {
  //     history.push("/parent/dashboard");
  //   };
  return (
    <div className="add-child-form">
      <Button>Back to Dashboard</Button>
      <Form>
        <h1>Ingresa alumno</h1>
        <label>
          Primer Nombre del alumno
          <Field
            type="text"
            name="firstName"
            placeholder="Primer Nombre del alumno"
          />
          {touched.firstName && errors.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
        </label>
        <label>
          Apellido del alumno
          <Field
            type="text"
            name="lastName"
            placeholder="Apellido del alumno"
          />
          {touched.lastName && errors.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
        </label>
        <label>
          Fecha de nacimiento
          <Field type="date" name="birthdate" />
          {touched.birthdate && errors.birthdate && (
            <p className="error">{errors.birthdate}</p>
          )}
        </label>
        <label>
          Codigo de clase
          <Field type="text" name="classCode" placeholder="Codigo de clase" />
          {touched.classCode && errors.classCode && (
            <p className="error">{errors.classCode}</p>
          )}
        </label>
        <Button>Enviar</Button>
      </Form>
    </div>
  );
};

const FormikAddChildFormSPN = withFormik({
  mapPropsToValues({ firstName, lastName, birthdate, classCode }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      birthdate: birthdate || "",
      classCode: classCode || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter your child's first name"),
    lastName: Yup.string().required("Please enter your child's last name"),
    birthdate: Yup.string().required(
      "Please enter your child's birthdate for validation"
    ),
    classCode: Yup.string().required("Please enter your child's class code")
  }),
  handleSubmit(values, { resetForm, props }) {
    let newStudent = {
      firstName: values.firstName,
      lastName: values.lastName,
      birthdate: values.birthdate,
      classCode: values.classCode
    };
    resetForm();
  }
})(AddChildFormSPN);

export default FormikAddChildFormSPN;
