import {
  GET_ALL_CLASSES_START,
  GET_ALL_CLASSES_SUCCESS,
  GET_ALL_CLASSES_FAILURE,
} from "./types";

const initialState = {
  clase: [],
  error: "",
  isLoading: false,
  user: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CLASSES_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case GET_ALL_CLASSES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        isLoading: true,
        clase: action.payload.classes,
      };

    case GET_ALL_CLASSES_FAILURE:
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
