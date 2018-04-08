import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { navMiddleware } from "../utils/redux";
import reducer from "../reducers";

const store = createStore(reducer, applyMiddleware(navMiddleware, logger));

export default store;
