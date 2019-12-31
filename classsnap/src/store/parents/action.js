import axiosWithParentAuth from "../../utils/axiosWithParentAuth";

import {
  PARENT_POST_RATING_START,
  PARENT_POST_RATING_SUCCESS,
  PARENT_POST_RATING_FAILURE
} from "./types";

export const editRating = (info, id) => {
  return dispatch => {
    dispatch({ type: PARENT_POST_RATING_START });
    axiosWithParentAuth()
      .put(`/api/ssrating/${id}`, info)
      .then(res => {
        dispatch({
          type: PARENT_POST_RATING_SUCCESS,
          payload: res.data
        });
        console.log("Rating edited");
      })
      .catch(error => {
        console.log("Parent Edit Rating", error);
      });
  };
};
