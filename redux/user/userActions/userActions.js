import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_MESSAGE,
} from "../userTypes/userTypes";
import { apiInstance } from "../../../utils/utils";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (userInfo) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      userInfo: userInfo,
    },
  };
};
export const loginErrorMessage = (message) => {
  return {
    type: LOGIN_MESSAGE,
    payload: {
      errorMessage: message,
    },
  };
};
export const loginFailure = (failure) => {
  return {
    type: LOGIN_FAILURE,
    payload: failure,
  };
};
export const login = ({ info }) => {
  return (dispatch) => {
    dispatch(loginRequest);
    apiInstance
      .post("/api/v1/user/login", {
        email: info.email,
        password: info.password,
      })
      .then((res) => {
        const user_info = res.data;
        const message = res.data.message;
        res.data.status
          ? dispatch(loginSuccess(user_info))
          : dispatch(loginErrorMessage(message));
      })
      .catch((err) => dispatch(loginFailure(err)));
  };
};
