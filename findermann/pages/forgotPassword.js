import Head from "next/head";
import Button from "../Components/Buttons/Button";
import styles from "../styles/forgotPassword.module.css";
import Field from "../Components/Field/Field";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className="container">
        <form action="" className={styles.forgotPassword}>
          <h2>Forgot Password</h2>
          <p>A link will be sent to your registers email address</p>
          <Field
            text="Enter your email address"
            type="email"
            name="email"
            fieldType="Input"
          />
          <Button
            type="submit"
            text="Send Link"
            width="100%"
            margin="0.5rem 0 0 0 "
          />
        </form>
      </div>
      {/* <!-- end of container --> */}
    </>
  );
}
