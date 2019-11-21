import React from "react";
import { Rating, Button } from "semantic-ui-react";

const ParentRatingFormSPN = props => {
  return (
    <div className="parent-rating-form">
      <h2>Pregunta de {props.date}</h2>
      <div className="question">{props.question}</div>
      <h4>Evalua la claridad de la respuesta del alumno</h4>
      <Rating maxRating={5} clearable size="massive" />
      <Button>Enviar</Button>
    </div>
  );
};

export default ParentRatingFormSPN;
