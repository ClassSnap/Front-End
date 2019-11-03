import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import getAllClass from "../../store/teachers/action";

//components
import ClassCard from "./ClassCard";
import axiosWithAuth from "../../utils/axiosWithAuth";

//Note: List is undefined despite the fact that it is fetched
//correctly, the data is not being rendered to the page.

const ClassList = props => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const teacherId = localStorage.getItem("teacherId");
    await axiosWithAuth()
      .get(`/api/teacher/${teacherId}`)
      .then(teacher => {
        setList(teacher.data.classes);
        console.log(list);
      });
  }, []);

  return (
    <div className="class-list">
      {list.map(info => (
        <ClassCard key={info.id} name={info.name} classCode={info.classCode} />
      ))}
    </div>
  );
};

// class ClassList extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   list: [],
//     // };
//   }

//   async componentDidMount() {
//     await this.props.getAllClass(localStorage.getItem("teacherId"));
//     // this.state.list = this.props.clase;
//   }

//   render() {
//     return (
//       <div className="class-list">
//         {this.props.clase.map(info => (
//           <ClassCard name={info.name} />
//         ))}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     isLoading: state.teacher.isLoading,
//     error: state.teacher.error,
//     clase: state.teacher.clase,
//   };
// }

// export default connect(
//   mapStateToProps,
//   { getAllClass },
// )(ClassList);

export default ClassList;
