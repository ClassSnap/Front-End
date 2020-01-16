import {
  PARENT_POST_RATING_START,
  PARENT_POST_RATING_SUCCESS,
  PARENT_POST_RATING_FAILURE
} from "./types";

const initialState = {
  isLoading: false,
  error: "",
  rating: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case PARENT_POST_RATING_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case PARENT_POST_RATING_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        rating: action.payload
      };
    case PARENT_POST_RATING_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducers;
