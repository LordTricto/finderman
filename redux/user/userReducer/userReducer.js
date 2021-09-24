import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_MESSAGE,
} from "../userTypes/userTypes";
const INITIAL_STATE = {
  loggedIn: false,
  userInfo: [],
  accessToken: "",
  errorMessage: "",
  failure: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === LOGIN_REQUEST) {
    return {
      ...state,
      loggedIn: false,
      userInfo: [],
      accessToken: "",
      errorMessage: "",
      failure: "",
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      loggedIn: true,
      userInfo: action.payload.userInfo.result,
      accessToken: action.payload.userInfo.accessToken,
      errorMessage: "",
      failure: "",
    };
  }
  if (action.type === LOGIN_MESSAGE) {
    return {
      ...state,
      loggedIn: false,
      userInfo: [],
      accessToken: "",
      errorMessage: action.payload.errorMessage,
      failure: "",
    };
  }
  if (action.type === LOGIN_FAILURE) {
    return {
      ...state,
      loggedIn: false,
      userInfo: [],
      accessToken: "",
      errorMessage: "",
      failure: action.payload,
    };
  }
  return state;
};

export default userReducer;
