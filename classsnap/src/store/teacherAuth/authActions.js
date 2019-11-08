import axios from "axios";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./types";

//login action
export const login = (credentials, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axios
      .post(
        "https://class-snap.herokuapp.com/api/auth/teacher/login",
        credentials,
      )
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("teacherId", res.data.id);
        history.push("/teacher/dashboard");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAIL, payload: err.response });
        console.log("authFailure", err.response);
      });
  };
};

//Logout
export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("token");
    localStorage.removeItem("teacherId");
  };
};

//Register
export const register = (credentials, history) => {
  return dispatch => {
    dispatch({ type: REGISTER_START });
    axios
      .post(
        "https://class-snap.herokuapp.com/api/auth/teacher/register",
        credentials,
      )
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS });
        history.push("/teacherlogin");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload: err.response });
        console.log("authFailure", err.response);
      });
  };
};
