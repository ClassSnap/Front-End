import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import PrivateParentRoute from "./utils/PrivateParentRoute";
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
import ParentDashboardSPN from "./components/Parent-Dashboard/parent-dashboardSPN";
import ParentRatingForm from "./components/Parent-Dashboard/ENG/RatingForm";
import AddStudentForm from "./components/Teacher-Single-Class-Dashboard/AddStudentFormFormik";
import AddChildForm from "./components/Parent-Dashboard/ENG/AddChildForm";
import AddChildFormSPN from "./components/Parent-Dashboard/SPN/AddChildFormSPN";
import ViewStudentParentInfo from "./components/Teacher-Single-Class-Dashboard/ViewStudentParentInfo";
import helpPage from "./components/HelpPage";
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
            <Route path="/teacherlogin" component={teacherLogin} />
            <Route path="/parentlogin" component={parentLogin} />
            <Route path="/teachersignup" component={teacherReg} />
            <Route path="/parentsignup" component={parentReg} />
            <Route path="/parentloginspn" component={parentloginspn} />
            <Route path="/parentsignupspn" component={parentregspn} />
            <Route path="/help" component={helpPage} />
            {/* Private Route */}
            <Route
              exact
              path="/teacher/dashboard"
              render={props => <TeacherDashboard {...props} />}
            />
            <PrivateRoute
              exact
              path="/teacher/classdash"
              component={SingleClassView}
            />
            <PrivateRoute
              exact
              path="/teacher/add-question-demo"
              component={AddQuestionFormDemo}
            />
            <PrivateRoute
              exact
              path="/teacher/addquestion"
              component={AddQuestionForm}
            />
            <PrivateRoute
              exact
              path="/teacher/viewstudent"
              component={ViewStudentParentInfo}
            />
            <PrivateRoute
              exact
              path="/teacher/editquestion"
              component={EditQuestionForm}
            />{" "}
            <PrivateRoute
              exact
              path="/teacher/question-result-list"
              component={QuestionResultList}
            />
            <PrivateRoute
              exact
              path="/teacher/question-result"
              component={QuestionResult}
            />
            <PrivateRoute
              exact
              path="/teacher/addclass"
              component={AddClassForm}
            />
            <PrivateRoute
              exact
              path="/teacher/addstudent"
              component={AddStudentForm}
            />
            <PrivateParentRoute
              exact
              path="/parent/dashboard"
              component={ParentDashboard}
            />
            <PrivateParentRoute
              exact
              path="/parent/spn/dashboard"
              component={ParentDashboardSPN}
            />
            <PrivateParentRoute
              exact
              path="/parent/addchild"
              component={AddChildForm}
            />
            <PrivateParentRoute
              exact
              path="/parent/spn/addchild"
              component={AddChildFormSPN}
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
