import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, Header, Table, Tab } from "semantic-ui-react";
import axiosWithAuth from "../../utils/axiosWithAuth";

const ViewStudentParent = props => {
  const [classId, setClassId] = useState(localStorage.getItem("classId"));
  const [allStudents, setAllStudents] = useState([]);
  const [allParents, setAllParents] = useState([]);
  console.log(props);
  console.log(props.location.state);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/class/students/${classId}`)
      .then(res => {
        setAllStudents(res.data.student);
      });
    axiosWithAuth()
      .get(`/api/class/parents/${classId}`)
      .then(res => {
        console.log(res.data.parents);
        setAllParents(res.data.parents);
      });
  }, []);
  return (
    <div>
      <h1>Student Info</h1>
      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student First Name</Table.HeaderCell>
            <Table.HeaderCell>Student Last Name</Table.HeaderCell>
            <Table.HeaderCell>Student ID</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {allStudents.map(student => (
          <Table.Row>
            <Table.Cell>{student.firstName}</Table.Cell>
            <Table.Cell>{student.lastName}</Table.Cell>
            <Table.Cell>{student.learnerCode}</Table.Cell>
          </Table.Row>
        ))}
      </Table>

      <h1>Students with Parents Registered on ClassSnap</h1>
      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student First Name</Table.HeaderCell>
            <Table.HeaderCell>Student Last Name</Table.HeaderCell>
            <Table.HeaderCell>Parent</Table.HeaderCell>
            <Table.HeaderCell>Relationship with child</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {allParents.map(parent => (
          <Table.Row>
            <Table.Cell>{parent.firstName}</Table.Cell>
            <Table.Cell>{parent.lastName}</Table.Cell>
            <Table.Cell>{parent.parentName}</Table.Cell>
            <Table.Cell>{parent.relationship}</Table.Cell>
          </Table.Row>
        ))}
      </Table>
      <Link to="/teacher/dashboard">
        <h4>Back to Dashboard</h4>
      </Link>
    </div>
  );
};

export default ViewStudentParent;
