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
  DELETE_QUESTION_BY_ID_START,
  DELETE_QUESTION_BY_ID_SUCCESS,
  DELETE_QUESTION_BY_ID_FAILURE,
  UPDATE_QUESTION_START,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAILURE
} from "./types";

//1. Add Class
export const addClass = (info, history) => {
  return dispatch => {
    dispatch({ type: ADD_CLASS_START });
    axiosWithAuth()
      .post(`/api/class`, info)
      .then(res => {
        console.log("fired");
        dispatch({
          type: ADD_CLASS_SUCCESS,
          payload: res.data
        });
        history.push("/teacher/dashboard");
      })
      .catch(err => {
        dispatch({
          type: ADD_CLASS_FAILURE,
          payload: err.response
        });
      });
  };
};

//Add question action
export const addQuestion = (info, history) => {
  return dispatch => {
    dispatch({ type: ADD_QUESTION_START });
    axiosWithAuth()
      .post(`/api/question`, info)
      .then(res => {
        dispatch({
          type: ADD_QUESTION_SUCCESS,
          payload: res.data
        });
        history.push("/teacher/dashboard");
      })
      .catch(err => {
        dispatch({
          type: ADD_QUESTION_FAILURE,
          payload: err.response
        });
      });
  };
};

//Get Question By Class Id
export const getAllQuestions = id => {
  return dispatch => {
    dispatch({ type: GET_QUESTIONS_BY_CLASS_START });
    axiosWithAuth()
      .get(`/api/question/class/${id}`)
      .then(res => {
        dispatch({
          type: GET_QUESTIONS_BY_CLASS_SUCCESS,
          payload: res.data
        });
        // history.push("/teacher/classdash");
        // localStorage.setItem("className", name);
        // localStorage.setItem("classCode", classCode);
      })
      .catch(err => {
        dispatch({
          type: GET_QUESTIONS_BY_CLASS_FAILURE,
          payload: err.response
        });
      });
  };
};

//Delete Question By Id
export const deleteQuestion = id => {
  return dispatch => {
    dispatch({ type: DELETE_QUESTION_BY_ID_START });
    axiosWithAuth()
      .delete(`/api/question/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_QUESTION_BY_ID_SUCCESS
        });
        console.log("deleted");
      });
  };
};

//Update Question By Id
export const updateQuestion = (id, question, history) => {
  return dispatch => {
    dispatch({ type: UPDATE_QUESTION_START });
    axiosWithAuth()
      .put(`/api/question/${id}`, question)
      .then(res => {
        dispatch({
          type: UPDATE_QUESTION_SUCCESS
        });

        console.log("edit question");
      });
  };
};
