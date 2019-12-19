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

const initialState = {
  error: "",
  isLoading: false,
  isAuth: localStorage.getItem("token") ? true : false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isAuth: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case LOGOUT_START:
      return {
        ...state,
        error: "",
        isLoading: true,
        isAuth: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isAuth: false
      };
    case REGISTER_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        errors: "",
        isLoading: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errors: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default reducers;
