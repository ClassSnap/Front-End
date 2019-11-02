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
        history.push("/teacher/add-question");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAIL, payload: err.response });
        console.log("authFailure", err.response);
      });
  };
};

export const register = "";
