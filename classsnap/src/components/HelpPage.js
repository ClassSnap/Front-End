import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const HelpPage = () => {
  const [spanish, setSpanish] = useState(false);
  const Language = styled.div`
    margin-top: 20px;
    margin-right: 50px;
    margin-bottom: -20px;
    text-align: right;
  `;
  const handleSpanishClick = () => {
    setSpanish(true);
  };

  const handleEnglishClick = () => {
    setSpanish(false);
  };

  return (
    <div id="helpPage">
      {/* <Language className={spanish ? "show-spn off" : "show-spn"}>
        <Button color="light-blue" onClick={handleSpanishClick}>
          Español
        </Button>
      </Language> */}
      <Language className={spanish ? "show-eng" : "show-eng off"}>
        <Button color="light-blue" onClick={handleEnglishClick}>
          English
        </Button>
      </Language>
      {spanish ? (
        <strong>
          <h1>Ayuda</h1>
        </strong>
      ) : (
        <strong>
          <h1>Help</h1>
        </strong>
      )}
      <div className={spanish ? "help-eng off" : "help-eng"}>
        <br></br>
        <h3 id="help">
          The following questions provide additional information about
          ClassSnap. If you have any questions/concerns, please send us your
          comment <a href="https://forms.gle/XkNUdnaqDpSwcCn9A">here</a>.
        </h3>
        <h3 id="help">What is ClassSnap?</h3>
        <p id="help">
          ClassSnap is an app that helps teachers to expand students' education
          outside of the classroom. With the ClassSnap platform, teachers can
          send out questions to parents on a regular basis. Parents will ask
          their child the question and evaulate their child's answer. Parents
          will rate the child's answer and send the rating (on a 5 point scale)
          back to the teacher for evaluation. The instant feedback can help
          teachers to make adjustments to your child's education.
        </p>
        <h3 id="help">Who created ClassSnap and why?</h3>
        <p id="help">
          ClassSnap is created by Karen Li, the Founder of ClassSnap LLC and a
          former teacher in San Antonio. Karen created ClassSnap because she
          recognized the need for parents, students and teachers to communicate
          more frequently. She wants to build tools for parents so that they can
          be proactive about their child's academic needs. She also hopes that
          the questions can help parents to have more meaningful conversation
          with their child.
        </p>
        <h3 id="help">Is using ClassSnap mandatory?</h3>
        <p id="help">
          No. ClassSnap is currently at its testing phase. Therefore,
          participation on this app is voluntary. We do encourage you to try it
          out to see if the product can help you and your child. We also
          encourage you to provide us with feedback so that we can improve the
          product for everyone.
        </p>
        <h3 id="help">How do I register for an account?</h3>
        <p id="help">
          If you are a teacher, select{" "}
          <Link to="/teacher/signup">Teacher Register</Link> to register for an
          account. You will need to provide your name, email, school location to
          register. If you are a parent, select
          <Link to="/parent/signup">Parent Register</Link> to register for an
          account. You will need to provide your name, email, and relationship
          with your child to register for an accoutn.
        </p>
        <h3 id="help">How do I add a class? (For Teachers)</h3>
        <p id="help">
          After logging in, there will be an "Add Class" button on the right.
          Click on the button and follow the instructions to create a class. A
          class code will be automatically generated when the class is created.
          The class code is required for parents to add their child.
        </p>
        <h3 id="help">How do I add a child (For Parents)</h3>
        <p id="help">
          To add a child, click on "Add Child" on the parent dashboard. The form
          will begin with asking for a class code. The Class Code is provided by
          the teacher. The form will not work if the class code is invalid.
          Please check with your child's teacher if you experience the error for
          more than 3 times. The form will then ask for your child's first name,
          last name and student ID. These information are used to search for
          your child in the corresponding class. An error will occur if the
          information provided is incorrect. If the information provided is
          correct, you will be asked to confirm the information. Simply click
          "Confirm" and your child will be added to your dashboard.
        </p>
        <h3 id="help">How do I get a Class Code?</h3>
        <p id="help">
          <strong>For teachers,</strong>Class Codes are auto-generated upon
          creating the class and can be found at the bottom of your class card
          on the left (grey text) or at the class dashboard.
          <br></br>
          <strong>For parents,</strong> Class Codes are provided by teachers.
          Please check with your teacher for a class code.
        </p>
        <h3 id="help">What are the Terms of Conditions of ClassSnap?</h3>
        <p id="help">
          To read our Terms and Conditions, click <a href="/terms">here</a>.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
