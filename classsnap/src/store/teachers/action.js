import axiosWithAuth from "../../utils/axiosWithAuth";

import {
  GET_ALL_CLASSES_START,
  GET_ALL_CLASSES_SUCCESS,
  GET_ALL_CLASSES_FAILURE,
} from "./types";

//1. Get class by teacher id
const getAllClass = id => dispatch => {
  //   dispatch({ type: GET_ALL_CLASSES_START });
  axiosWithAuth()
    .get(`/api/teacher/${id}`)
    .then(res => {
      dispatch({
        type: GET_ALL_CLASSES_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ALL_CLASSES_FAILURE,
        payload: err.response,
      });
    });
};

export default getAllClass;
