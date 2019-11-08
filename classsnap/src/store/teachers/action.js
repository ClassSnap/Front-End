import axiosWithAuth from "../../utils/axiosWithAuth";

import { ADD_CLASS_START, ADD_CLASS_SUCCESS, ADD_CLASS_FAILURE } from "./types";

//1. Get class by teacher id
export const addClass = (info, history) => {
  return dispatch => {
    dispatch({ type: ADD_CLASS_START });
    axiosWithAuth()
      .post(`/api/class`, info)
      .then(res => {
        dispatch({
          type: ADD_CLASS_SUCCESS,
          payload: res.data,
        });
        history.push("/teacher/dashboard");
      })
      .catch(err => {
        dispatch({
          type: ADD_CLASS_FAILURE,
          payload: err.response,
        });
      });
  };
};
