import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import getAllClass from "../../store/teachers/action";

//components
import ClassCard from "./ClassCard";

// const ClassList = props => {
//   useEffect(() => {
//     props.getAllClass(localStorage.getItem("teacherId"));
//   }, []);

//   const list = props.clase;
//   console.log(list);

//   return (
//     <div className="class-list">
//       {list.map(info => (
//         <ClassCard name={info.name} classCode={info.classCode} />
//       ))}
//     </div>
//   );
// };

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    await this.props.getAllClass(localStorage.getItem("teacherId"));
    this.state.list = this.props.clase;
  }

  render() {
    return (
      <div className="class-list">
        {this.state.list.map(info => (
          <ClassCard name={info.name} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.teacher.isLoading,
    error: state.teacher.error,
    clase: state.teacher.clase,
  };
}

export default connect(
  mapStateToProps,
  { getAllClass },
)(ClassList);
