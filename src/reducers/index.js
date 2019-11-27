import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import tickets from "./tickets";
import comments from "./comments";
import risk from "./risk";

export default combineReducers({ user, events, tickets, comments, risk });
