import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../Components/Buttons/Button";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Field from "../Components/Field/Field";
import { apiInstance } from "../utils/utils";
import { login, userLoggedIn } from "../redux/user/userActions/userActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_CURRENT_USER } from "../redux/user/userTypes/userTypes";
// export const getStaticProps = async () = {
//   const res = await
// }

const config = {
  email: "",
  password: "",
};

export default function Home() {
  const [info, setInfo] = useState({ ...config });
  // const [message, setMessage] = useState();
  const [accessToken, setAccessToken] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const failure = useSelector((state) => state.user.failure);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    loggedIn ? router.push("/userDashboard") : null;
  }, [loggedIn]);

  const handleConfig = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (!info.password || !info.email === "-") {
      return null;
    }
    dispatch(login({ info }));
  };

  console.log(errorMessage);

  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form
          action="/api/v1/user/login"
          className={`${styles["loginForm"]} ${styles["login"]}`}
          onSubmit={handleFormSubmit}
        >
          <h2>Login</h2>

          <Field
            text="Email"
            type="email"
            name="email"
            fieldType="Input"
            margin="1rem 0"
            func={(e) => handleConfig(e)}
            req
          />

          <Field
            text="Password"
            type="password"
            name="password"
            fieldType="Input"
            margin="1rem 0"
            func={(e) => handleConfig(e)}
          />
          {errorMessage && (
            <div className={styles.login_errorMessage}>
              <p className={styles.login_message}>* {errorMessage}</p>
            </div>
          )}

          <Button
            text="Login"
            width="100%"
            to="/userDashboard"
            margin="1rem 0"
          />

          <div className={styles.extra_login_info}>
            <div className={styles.extra_login_info__rememberMe}>
              <input type="checkbox" name="rememberMe" id="rememberMe"></input>
              <label>Remember Me</label>
            </div>

            <Link href="/forgotPassword"> Forgot Password? </Link>
          </div>

          <p className={styles.extra_login_info__signUp}>
            {`
            Don't have an account?
      `}

            <Link href="/signup"> Sign up </Link>
          </p>
        </form>
      </div>
      {/* <!-- end of container --> */}
    </>
  );
}
