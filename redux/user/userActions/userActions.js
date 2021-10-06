import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_MESSAGE,
  LOGOUT_SUCCESS,
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

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const getUser = (id, access_token) => {
  return (dispatch) => {
    dispatch(loginRequest);
    apiInstance
      .get("/api/v1/user/get/" + id, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        const user_info = res.data;
        const error_message = res.data.message;
        res.data.status === "success"
          ? dispatch(loginSuccess(user_info))
          : dispatch(loginErrorMessage(error_message));
      })
      .catch((err) => dispatch(loginFailure(err)));
  };
};
// export const signUp = ({ info, stateInfo }) => {
//   return (dispatch) => {
//     dispatch(loginRequest);
//     apiInstance
//       .post("/api/v1/user/register", {
//         firstName: info.firstName,
//         lastName: info.lastName,
//         email: info.email,
//         phoneNumber: info.phoneNumber,
//         address: info.address,
//         password: info.password,
//         username: info.username,
//         state: stateInfo.state,
//       })
//       .then((res) => {
//         const user_info = res.data;
//         const error_message = res.data.message;
//         res.data.status === "success"
//           ? dispatch(loginSuccess(user_info))
//           : dispatch(loginErrorMessage(error_message));
//       })
//       .catch((err) => dispatch(loginFailure(err)));
//   };
// };
export const logout = () => {
  return (dispatch) => {
    dispatch(logoutSuccess());
  };
};
