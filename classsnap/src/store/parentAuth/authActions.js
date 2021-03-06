import axios from "axios";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./types";

//login action
export const login = (credentials, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axios
      .post(
        "https://class-snap.herokuapp.com/api/auth/parent/login",
        credentials
      )
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        console.log(res.data.language);
        localStorage.setItem("parentToken", res.data.parentToken);
        localStorage.setItem("parentId", res.data.parentId);
        localStorage.setItem("language", res.data.language);
        if (res.data.language === "English") {
          history.push("/parent/dashboard");
        } else if (res.data.language === "Spanish") {
          history.push("/parent/spn/dashboard");
        } else {
          history.push("/parent/dashboard");
        }
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAIL, payload: err.response });
        console.log("authFailure", err.response);
      });
  };
};

//register action
export const register = (parent, history) => {
  return dispatch => {
    dispatch({ type: REGISTER_START });
    console.log(parent);
    axios
      .post("https://class-snap.herokuapp.com/api/auth/parent/register", parent)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS });
        history.push("/parentlogin");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload: err.response });
        console.log("authFailure", err.response);
      });
  };
};

//Logout
export const parentlogout = history => {
  return async dispatch => {
    await dispatch({ type: LOGOUT_START });
    localStorage.removeItem("parentToken");
    localStorage.removeItem("parentId");
    dispatch({ type: LOGOUT_SUCCESS });
  };
};
