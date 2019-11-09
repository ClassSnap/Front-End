import axiosWithAuth from "../../utils/axiosWithAuth";

import {
  ADD_CLASS_START,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE,
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  GET_QUESTIONS_BY_CLASS_START,
  GET_QUESTIONS_BY_CLASS_SUCCESS,
  GET_QUESTIONS_BY_CLASS_FAILURE,
} from "./types";

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

//Add question action
export const addQuestion = (info, history) => {
  return dispatch => {
    dispatch({ type: ADD_QUESTION_START });
    axiosWithAuth()
      .post(`/api/question/`, info)
      .then(res => {
        dispatch({
          type: ADD_QUESTION_SUCCESS,
          payload: res.data,
        });
        history.push("/teacher/classdash");
      })
      .catch(err => {
        dispatch({
          type: ADD_QUESTION_FAILURE,
          payload: err.response,
        });
      });
  };
};

//Get Question By Class Id
export const getAllQuestions = (id, name, classCode, history) => {
  return dispatch => {
    dispatch({ type: GET_QUESTIONS_BY_CLASS_START });
    axiosWithAuth()
      .get(`/api/question/class/${id}`)
      .then(res => {
        dispatch({
          type: GET_QUESTIONS_BY_CLASS_SUCCESS,
          payload: res.data,
        });
        history.push("/teacher/classdash");
        localStorage.setItem("className", name);
        localStorage.setItem("classCode", classCode);
      })
      .catch(err => {
        dispatch({
          type: GET_QUESTIONS_BY_CLASS_FAILURE,
          payload: err.response,
        });
      });
  };
};
