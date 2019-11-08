import { combineReducers } from "redux";
import teacherAuth from "./teacherAuth/reducers";
import parentAuth from "./parentAuth/reducers";
import teacher from "./teachers/reducers";

export default combineReducers({ teacherAuth, parentAuth, teacher });
