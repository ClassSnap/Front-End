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
// import ParentResponseForm from "./components/Parent-Dashboard/Demo/Parent-ResponseForm";
// import ParentNewQuestionList from "./components/Parent-Dashboard/Parent-NewQuestionList";
// import ParentAnsweredQuestionList from "./components/Parent-Dashboard/Demo/Parent-AnsweredQuestionList";
import QuestionResult from "./components/Teacher-Single-Class-Dashboard/Question-view/QuestionResult";
import QuestionResultList from "./components/Teacher-Single-Class-Dashboard/Question-view/QuestionResultList";
import NavBar from "./components/NavBar";
import AddClassForm from "./components/Teacher-Dashboard/AddClassForm";
import AddQuestionForm from "./components/Teacher-Dashboard/AddQuestionForm";
import EditQuestionForm from "./components/Teacher-Dashboard/EditQuestionForm";
import SingleClassView from "./components/Teacher-Single-Class-Dashboard/SingleClassDashboard";
import LandingPage from "./components/SignUp_Pages/landing";
import ClassList from "./components/Teacher-Dashboard/ClassList";
import ParentDashboard from "./components/Parent-Dashboard/parent-dashboard";
import ParentRatingForm from "./components/Parent-Dashboard/ENG/RatingForm";
import AddStudentForm from "./components/Teacher-Single-Class-Dashboard/AddStudentFormFormik";
import AddChildForm from "./components/Parent-Dashboard/ENG/AddChildForm";
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
            <Route
              exact
              path="/teacher/dashboard"
              render={props => <TeacherDashboard {...props} />}
            />
            <Route
              exact
              path="/teacher/classdash"
              component={SingleClassView}
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
              path="/teacher/editquestion"
              component={EditQuestionForm}
            />{" "}
            <Route
              exact
              path="/teacher/question-result-list"
              component={QuestionResultList}
            />
            <Route
              exact
              path="/teacher/question-result"
              component={QuestionResult}
            />
            <Route exact path="/teacher/addclass" component={AddClassForm} />
            <Route
              exact
              path="/teacher/addstudent"
              component={AddStudentForm}
            />
            <Route exact path="/parent/dashboard" component={ParentDashboard} />
            {/* <Route
              exact
              path="/parent/ratingform"
              component={ParentRatingForm}
            /> */}
            <Route exact path="/parent/addchild" component={AddChildForm} />
            {/* <Route
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
            /> */}
          </div>
        </Switch>
      </div>
    </Router>
    //   </StudentDataContext.Provider>
    // </QuestionContext.Provider>
  );
}

export default App;
