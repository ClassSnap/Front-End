import React from "react";
import { Card } from "semantic-ui-react";

const QuestionCard = props => {
  console.log(props.rating);
  return (
    <div>
      <Card
        onClick={() => {
          props.onClick(
            props.id,
            props.question,
            props.questionId,
            props.classId,
            props.learnerParentId
          );
        }}
      >
        <Card.Content>
          <Card.Header>
            New Question for {props.firstName} {props.lastName}
          </Card.Header>
          <Card.Meta>{props.date.slice(0, 10)}</Card.Meta>
          <Card.Description>{props.question}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default QuestionCard;
