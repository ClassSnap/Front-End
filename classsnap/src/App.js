import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

//components
import teacherLogin from "./components/SignUp_Pages/teacher-signin";
import parentLogin from "./components/SignUp_Pages/parent-signin";
import teacherReg from "./components/SignUp_Pages/teacher-signup";
import parentReg from "./components/SignUp_Pages/parent-signup";
import teacherDashboard from "./components/Teacher-Dashboard/dashboard";
import AddQuestionFormDemo from "./components/Teacher-Dashboard/AddQuestionFormDemo";
import AddQuestion from "./components/Teacher-Dashboard/AddQuestionForm";
import ParentResponseForm from "./components//Parent-Dashboard/Parent-ResponseForm";
import ParentNewQuestionList from "./components/Parent-Dashboard/Parent-NewQuestionList";
import ParentAnsweredQuestionList from "./components/Parent-Dashboard/Parent-AnsweredQuestionList";
import QuestionResult from "./components/Teacher-Single-Class-Dashboard/Question-view/QuestionResult";
import QuestionResultList from "./components/Teacher-Single-Class-Dashboard/Question-view/QuestionResultList";
import NavBar from "./components/NavBar";
import AddClassForm from "./components/Teacher-Dashboard/AddClassForm";

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
            <Route exact path="/teacherlogin" component={teacherLogin} />
            <Route exact path="/parentlogin" component={parentLogin} />
            <Route exact path="/teachersignup" component={teacherReg} />
            <Route exact path="/parentsignup" component={parentReg} />

            {/* Private Route */}
            <Route
              exact
              path="/teacher/dashboard"
              component={teacherDashboard}
            />
            <Route
              exact
              path="/teacher/add-question-demo"
              component={AddQuestionFormDemo}
            />
            <Route exact path="/teacher/add-quesiton" component={AddQuestion} />
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
