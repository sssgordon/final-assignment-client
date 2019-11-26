import { combineReducers } from "redux";
import jwt from "./jwt";
import events from "./events";
import tickets from "./tickets";

export default combineReducers({ jwt, events, tickets });
