import { combineReducers } from "redux";
import teacherAuth from "./teacherAuth/reducers";
import parentAuth from "./parentAuth/reducers";

export default combineReducers({ teacherAuth, parentAuth });
