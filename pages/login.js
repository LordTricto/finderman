import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../Components/Buttons/Button";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Field from "../Components/Field/Field";
import { apiInstance } from "../utils/utils";
import { loginSuccess } from "../redux/user/userActions/userActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// export const getStaticProps = async () = {
//   const res = await
// }

const loginConfig = {
  email: "",
  password: "",
};

export default function Login() {
  const [info, setInfo] = useState({ ...loginConfig });
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    loggedIn ? router.push("/userdashboard") : null;
  }, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

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
    apiInstance
      .post("/api/v1/user/login", {
        email: info.email,
        password: info.password,
      })
      .then((res) => {
        const user_info = res.data;
        const error_message = res.data.message;
        res.data.status === "success"
          ? dispatch(loginSuccess(user_info))
          : setErrorMessage(error_message);
      })
      .catch((err) => {
        console.log(err);
        // res.status(400)
        //   ? setErrorMessage(err.message)
        //   : res.status(401)
        //   ? setErrorMessage(err.message)
        //   : res.status(500)
        //   ? console.log(err)
        //   : null;

        // res.status(400).json({
        //   statusCode: 400,
        //   message: err.message,
        // });
        // res.status(401).json({
        //   statusCode: 401,
        //   message: err.message,
        // });
        // res.status(500).json({
        //   statusCode: 500,
        //   message: err.message,
        // });
        // err.message;
      });
  };

  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form
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
            length="8"
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
