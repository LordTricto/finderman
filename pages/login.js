import Head from "next/head";
import Button from "../Components/Buttons/Button";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Field from "../Components/Field/Field";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form action="" className={`${styles["loginForm"]} ${styles["login"]}`}>
          <h2>Login</h2>

          <Field
            text="Username:"
            type="text"
            name="username"
            fieldType="Input"
            margin="1rem 0"
          />

          <Field
            text="Password:"
            type="password"
            name="password"
            fieldType="Input"
            margin="1rem 0"
          />

          <Button
            text="Login"
            width="100%"
            to="/userDashboard"
            margin="1rem 0 "
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
