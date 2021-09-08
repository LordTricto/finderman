import Head from "next/head";
import Button from "../Components/Buttons/Button";
import styles from "../styles/resetPassword.module.css";
import Field from "../Components/Field/Field";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form action="" className={styles.resetPassword}>
          <h2>Reset Password</h2>
          <p>Enter new password</p>
          <Field
            text="Enter New Password"
            type="password"
            name="password"
            fieldType="Input"
          />
          <Button
            type="submit"
            text="Reset"
            width="100%"
            margin="0.5rem 0 0 0 "
            to="/login"
          />
        </form>
      </div>
      {/* <!-- end of container --> */}
    </>
  );
}
