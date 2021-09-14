import React from "react";
import { combineReducers } from "redux";

import userReducer from "./user/userReducer/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
export default rootReducer;
