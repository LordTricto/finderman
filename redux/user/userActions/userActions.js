import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_MESSAGE,
} from "../userTypes/userTypes";
import { apiInstance } from "../../../utils/utils";
import axios from "axios";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (accessToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      accessToken: accessToken,
    },
  };
};
export const loginMessage = (message) => {
  return {
    type: LOGIN_MESSAGE,
    payload: {
      message: message,
    },
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
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
        const access_token = res.data.access_token;
        const message = res.data.message;
        res.data.status
          ? dispatch(loginSuccess(access_token))
          : dispatch(loginMessage(message));
      })
      .catch((err) => dispatch(loginFailure(err)));
  };
};
