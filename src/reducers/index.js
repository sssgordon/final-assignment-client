import { combineReducers } from "redux";
import jwt from "./jwt";
import events from "./events";
import tickets from "./tickets";
import comments from "./comments";

export default combineReducers({ jwt, events, tickets, comments });
