import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const TermsandConditions = () => {
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
          <h1>Términos y Condiciones</h1>
        </strong>
      ) : (
        <strong>
          <h1>Terms and ConditionsTerms </h1>
        </strong>
      )}
      <div className={spanish ? "help-eng off" : "help-eng"}>
        <br></br>
        <h3 id="help">
          Here are the Terms and Conditions ("Terms", "Terms and Conditions") of
          using ClassSnap. Please read them carefully before using
          class-snap.netlify.com operated by ClassSnap LLC ("us", "we", "our").
        </h3>
        <br></br>
        <h3 id="help">
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who access or use the Service.
        </h3>
        <br></br>
        <h3 id="help">
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you may not
          access the Service.
        </h3>
        <h3 id="help">Personal Data</h3>
        <p id="help">
          Our site collects your personal data for the functionality of the
          website. It also collects student data such as student name and
          student ID. These personal data will only be used to identify each
          personnel within the system so that our website can be functionable.
          We do not share parent, teacher, or student's personal data with third
          parties.
        </p>
        <h3 id="help">Student Data</h3>
        <p id="help">
          By signing up for a parent account, you are giving teachers permission
          to add your child's information into the ClassSnap database. Our
          website collects student's name and student ID in order to register a
          student, place a student in class, and allow teachers to post
          questions to the student's parents. We will not share student data
          with third parties.
        </p>
        <h3 id="help">Content</h3>
        <p id="help">
          Our service allows you to post questions and send ratings between two
          user types, "teachers" and "parents". The question, the category of
          the question, the grade level of the question, and the rating
          associated with each question are the property of ClassSnap LLC. We
          will only use the aforementioned data and will not use any personal
          information for our company's development.
        </p>
        <h3 id="help">Changes</h3>
        <p id="help">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 5 days' notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion.
        </p>
        <h3 id="help">Contact Us</h3>
        <p id="help">
          {" "}
          If you have any questions/concerns, please send us your comment{" "}
          <a href="https://forms.gle/XkNUdnaqDpSwcCn9A">here</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsandConditions;
