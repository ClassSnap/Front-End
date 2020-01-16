import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithParentAuth from "../../../utils/axiosWithParentAuth";

import AddChildInfo from "./AddChildInfoFormSPN";

const AddChildForm = () => {
  const [classCode, setClassCode] = useState({ classCode: "" });
  const [message, setMessage] = useState("");
  const [showChildInfoForm, setShowChildInfoForm] = useState(false);
  const [classInfo, setClassInfo] = useState({});

  const handleClassCodeChange = event => {
    setClassCode({ classCode: event.target.value });
  };

  const handleClassSearchSubmit = () => {
    axiosWithParentAuth()
      .post(`/api/parent/findClass/`, classCode)
      .then(confirm => {
        console.log(confirm.data);
        if (confirm.data.length === 0) {
          setMessage(
            "Código de clase no válido. Por favor, introduzca un código de clase válido. "
          );
          setShowChildInfoForm(false);
        } else {
          setMessage(
            "Clase encontrada. Ingrese la información de su hijo para continuar"
          );
          setShowChildInfoForm(true);
          setClassInfo(confirm.data[0]);
        }
      })
      .catch(error => {
        console.log(error);
        setMessage(
          "Código de clase no válido Vuelva a ingresar su código o consulte con el maestro de su hijo"
        );
      });
  };

  console.log(message);
  console.log(classInfo);
  return (
    <div>
      <h1>Siga las instrucciones para agregar a su hijo</h1>
      <div className="class-search">
        <form className="class-search-form" onSubmit={handleClassSearchSubmit}>
          <h3>Busque la clase de su hijo con el código de clase</h3>
          <input
            type="text"
            class="classCode"
            placeholder="Ingrese el código de clase"
            onChange={handleClassCodeChange}
          ></input>
          <button type="submit">Buscar clase</button>
          <h3>{message}</h3>
        </form>
      </div>
      <div className="child-info-form">
        <AddChildInfo
          showChildInfoForm={showChildInfoForm}
          classInfo={classInfo}
        />
      </div>
      {localStorage.getItem("language") === "Spanish" ? (
        <Link to="/parent/spn/dashboard">
          {" "}
          <h4>Volver al tablero</h4>
        </Link>
      ) : (
        <Link to="/parent/dashboard">
          <h4>Back to Dashboard</h4>
        </Link>
      )}
    </div>
  );
};

export default AddChildForm;
