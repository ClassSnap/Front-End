import {
  ADD_CLASS_START,
  ADD_CLASS_FAILURE,
  ADD_CLASS_SUCCESS,
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
} from "./types";

const initialState = {
  newClass: [],
  question: "",
  error: "",
  isLoading: false,
  user: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case ADD_CLASS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        isLoading: true,
        newClass: action.payload,
      };

    case ADD_CLASS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ADD_QUESTION_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case ADD_QUESTION_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        isLoading: true,
      };

    case ADD_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducers;
