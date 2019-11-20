import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

//components
import teacherLogin from "./components/SignUp_Pages/teacher-signin";
import parentLogin from "./components/SignUp_Pages/parent-signin";
import teacherReg from "./components/SignUp_Pages/teacher-signup";
import parentReg from "./components/SignUp_Pages/parent-signup";
import parentloginspn from "./components/SignUp_Pages/parent-signin-spn";
import parentregspn from "./components/SignUp_Pages/parent-signup-spn";
import TeacherDashboard from "./components/Teacher-Dashboard/dashboard";
import AddQuestionFormDemo from "./components/Teacher-Dashboard/AddQuestionFormDemo";
import ParentResponseForm from "./components//Parent-Dashboard/Parent-ResponseForm";
import ParentNewQuestionList from "./components/Parent-Dashboard/Parent-NewQuestionList";
import ParentAnsweredQuestionList from "./components/Parent-Dashboard/Parent-AnsweredQuestionList";

import NavBar from "./components/NavBar";
import AddClassForm from "./components/Teacher-Dashboard/AddClassForm";
import AddQuestionForm from "./components/Teacher-Dashboard/AddQuestionForm";
import LandingPage from "./components/SignUp_Pages/landing";
import AddStudentForm from "./components/Teacher-Single-Class-Dashboard/AddStudentForm";
import ClassList from "./components/Teacher-Dashboard/ClassList";
import AddStudentFormFormik from "./components/Teacher-Single-Class-Dashboard/AddStudentFormFormik";

//Parent components
import ParentDashboard from "./components/Parent-Dashboard/parent-dashboard";
//data
// import { sampleQuestions, sampleStudentData } from "./data";

//context
// import { QuestionContext } from "./contexts/QuestionContext";
// import { StudentDataContext } from "./contexts/StudentDataContext";

function App() {
  return (
    // <QuestionContext.Provider value={{ sampleQuestions }}>
    //   <StudentDataContext.Provider value={{ sampleStudentData }}>
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <div className="container">
            {/* Public Route */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/teacherlogin" component={teacherLogin} />
            <Route exact path="/parentlogin" component={parentLogin} />
            <Route exact path="/teachersignup" component={teacherReg} />
            <Route exact path="/parentsignup" component={parentReg} />
            <Route exact path="/parentloginspn" component={parentloginspn} />
            <Route exact path="/parentsignupspn" component={parentregspn} />
            {/* Private Route */}
            {/* <Route path="/teacher" render={props => <ClassList {...props} />} /> */}
            <Route
              exact
              path="/teacher/dashboard"
              render={props => <TeacherDashboard {...props} />}
            />

            <Route
              exact
              path="/teacher/add-question-demo"
              component={AddQuestionFormDemo}
            />
            <Route
              exact
              path="/teacher/addquestion"
              component={AddQuestionForm}
            />
            <Route
              exact
              path="/teacher/addstudentformik"
              component={AddStudentFormFormik}
            />
            <Route
              exact
              path="/teacher/addstudent"
              component={AddStudentForm}
            />
            <Route exact path="/teacher/addclass" component={AddClassForm} />
            <Route
              exact
              path="/parent/dashboard"
              render={props => <ParentDashboard {...props} />}
            />
            <Route
              exact
              path="/parent/response-form"
              component={ParentResponseForm}
            />
            <Route
              exact
              path="/parent/new-question-list"
              component={ParentNewQuestionList}
            />
            <Route
              exact
              path="/parent/answered-question-list"
              component={ParentAnsweredQuestionList}
            />
          </div>
        </Switch>
      </div>
    </Router>
    //   </StudentDataContext.Provider>
    // </QuestionContext.Provider>
  );
}

export default App;
