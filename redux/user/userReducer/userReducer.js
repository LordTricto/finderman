import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_MESSAGE,
} from "../userTypes/userTypes";
const INITIAL_STATE = {
  loggedIn: false,
  accessToken: "",
  message: "",
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === LOGIN_REQUEST) {
    return {
      ...state,
      loggedIn: false,
      accessToken: "",
      message: "",
      error: "",
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      loggedIn: true,
      accessToken: action.payload.accessToken,
      message: "",
      error: "",
    };
  }
  if (action.type === LOGIN_MESSAGE) {
    return {
      ...state,
      loggedIn: false,
      accessToken: "",
      message: action.payload.message,
      error: "",
    };
  }
  if (action.type === LOGIN_FAILURE) {
    return {
      ...state,
      loggedIn: false,
      accessToken: "",
      message: "",
      error: action.payload,
    };
  }
  return state;
};

export default userReducer;
