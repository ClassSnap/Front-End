import React from "react";
import { Button } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../store/parentAuth/authActions";
import { connect } from "react-redux";

const ParentSignUpFormSPN = ({ errors, touched, ...props }) => {
  return (
    <div className="parent-reg-form">
      <Link to="/parentsignup">
        <Button>English</Button>
      </Link>
      <Form>
        <h1>Registro de padres</h1>
        <label>
          Nombre
          <Field type="text" name="name" placeholder="Nombre" />
        </label>
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <label>
          Relación con estudiante
          <Field
            type="text"
            name="relationship"
            placeholder="Relación con estudiante"
          />
        </label>
        {touched.relationship && errors.relationship && (
          <p className="error">{errors.relationship}</p>
        )}
        <label>
          Correo electrónico
          <Field type="text" name="email" placeholder="correo electrónico" />
        </label>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <label>
          contraseña
          <Field type="password" name="password" placeholder="contraseña" />
        </label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <label>
          Confirma contraseña
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm contraseña"
          />
        </label>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <label>Idioma Preferido</label>
        <Field component="select" name="language" class="option">
          <option value="Spanish">Español</option>
          <option value="English">Inglés</option>
        </Field>
        {touched.language && errors.language && (
          <p className="error">{errors.language}</p>
        )}
        <button>Enviar</button>
      </Form>

      <h4>
        ¿Tienes una cuenta? Entre <Link to="/parentlogin">aquí</Link>.
      </h4>
    </div>
  );
};

const FormikParentRegistrationFormSPN = withFormik({
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
      .required("Password confirm is required")
  }),
  handleSubmit(values, { props }) {
    let parent = {
      parentName: values.name,
      parentEmail: values.email,
      parentPassword: values.password,
      relationship: values.relationship
    };
    props.register(parent, props.history);
  }
})(ParentSignUpFormSPN);

const mapPropsToState = state => {
  return {
    isLoading: state.parentAuth.isLoading,
    error: state.parentAuth.error
  };
};

export default connect(mapPropsToState, { register })(
  FormikParentRegistrationFormSPN
);
