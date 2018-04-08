import { combineReducers } from "redux";
import common from "./common";
import nav from "./nav";

export default combineReducers({
  common: common,
  nav: nav
});
