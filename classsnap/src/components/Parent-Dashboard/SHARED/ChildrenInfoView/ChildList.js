import React from "react";

//components
import ChildCard from "./ChildCard";

const ChildList = props => {
  return (
    <div className="child-list">
      {props.children.map(child => (
        <ChildCard
          key={child.id}
          firstName={child.firstName}
          lastName={child.lastName}
          learnerId={child.learnerId}
          onClick={props.handleClick}
        />
      ))}
    </div>
  );
};

export default ChildList;
