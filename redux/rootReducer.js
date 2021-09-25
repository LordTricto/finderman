import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userReducer/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
