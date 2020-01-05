import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

const ConfirmForm = props => {
  const [confirmStudentInfo, setInfo] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setInfo(props.confirmStudent);
  }, []);

  console.log(confirmStudentInfo);

  const handleSubmit = id => {
    console.log(id);
    let pair = {
      parentId: parseInt(localStorage.getItem("parentId", 10)),
      learnerId: id
    };
    axiosWithAuth()
      .post(`/api/parent/match/`, pair)
      .then(res => {
        console.log(res.data);
        setRedirect(true);
      })
      .catch(error => {
        setShowError(true);
      });
  };

  if (redirect) {
    return <Redirect to="/parent/dashboard" />;
  } else {
    return (
      <div
        className={props.showConfirmForm ? "show-confirm" : "show-confirm off"}
      >
        {props.confirmStudent.length === 0 ? (
          <h3>
            Niño no encontrado. Por favor revise la información de su hijo.
          </h3>
        ) : (
          <div className="confirm form">
            <h3>
              Niño encontrado. Por favor confirme la siguiente información
            </h3>
            <h3>El primer nombre:{props.confirmStudent[0].firstName}</h3>
            <h3>Apellido: {props.confirmStudent[0].lastName}</h3>
            <h3>
              Fecha de nacimiento{" "}
              {props.confirmStudent[0].birthdate.slice(0, 10)}
            </h3>
            <h3>Nombre de la clase: {props.confirmStudent[0].name}</h3>
            <button
              onClick={() => {
                handleSubmit(props.confirmStudent[0].id);
              }}
            >
              Confirm
            </button>
            {showError ? (
              <h3>
                Error al confirmar la pareja alumno-padre. Por favor, intenta de
                nuevo.
              </h3>
            ) : null}
          </div>
        )}
      </div>
    );
  }
};

export default ConfirmForm;
