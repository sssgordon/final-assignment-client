import { combineReducers } from "redux";
import jwt from "./jwt";
import events from "./events";

export default combineReducers({ jwt, events });
