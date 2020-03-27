import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FBLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    userId: "",
    name: "",
    email: "",
    picture: ""
  });

  return <div></div>;
};
