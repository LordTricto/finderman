import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_MESSAGE,
  LOGOUT_SUCCESS,
} from "../userTypes/userTypes";
const INITIAL_STATE = {
  loggedIn: false,
  userInfo: [],
  accessToken: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === LOGIN_REQUEST) {
    return {
      ...state,
      loggedIn: false,
      userInfo: [],
      accessToken: "",
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      loggedIn: true,
      userInfo: action.payload.userInfo.message,
      accessToken: action.payload.userInfo.access_token,
    };
  }
  if (action.type === LOGOUT_SUCCESS) {
    return {
      ...state,
      loggedIn: false,
      userInfo: [],
      accessToken: "",
    };
  }
  return state;
};

export default userReducer;
