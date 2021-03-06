import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/signup.module.css";
import StatesList from "../utils/statesList";
import Button from "../Components/Buttons/Button";
import Field from "../Components/Field/Field";
import { apiInstance } from "../utils/utils";
import { loginSuccess } from "../redux/user/userActions/userActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SignupConfig = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  password: "",
  username: "",
};
const SignupStateConfig = {
  state: "",
};

export default function Register() {
  const [info, setInfo] = useState({ ...SignupConfig });
  const [stateInfo, setStateInfo] = useState({ ...SignupStateConfig });
  const router = useRouter();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const level = useSelector((state) => state);
  useEffect(() => {
    loggedIn ? router.push("/userdashboard") : null;
    console.log(loggedIn);
  }, [loggedIn, level]);

  const handleConfig = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleStateConfig = (e) => {
    const { innerText } = e.target;
    setStateInfo({
      ...stateInfo,
      state: innerText,
    });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (
      !info.firstName === "-" ||
      !info.lastName === "-" ||
      !info.phoneNumber === "-" ||
      !info.email === "-" ||
      !info.address === "-" ||
      !info.username === "-" ||
      !info.password ||
      !stateInfo.state === "-"
    ) {
      return null;
    }
    // dispatch(signUp({ info, stateInfo }));
    apiInstance
      .post("/api/v1/user/register", {
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        phoneNumber: info.phoneNumber,
        address: info.address,
        password: info.password,
        username: info.username,
        state: stateInfo.state,
      })
      .then((res) => {
        const user_info = res.data;
        const error_message = res.data.message;
        res.data.status === "success"
          ? dispatch(loginSuccess(user_info))
          : setErrorMessage(error_message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <!-- start of container --> */}

      <div className="container">
        {/* start of post_person_info */}

        {/* this is a signup form that is just inheriting the grid property from post_person_info class */}

        <form
          className={`${styles["signupForm"]} ${styles["signup"]}`}
          onSubmit={handleFormSubmit}
        >
          <h2>Sign up</h2>
          <div className={styles.post_person_info}>
            <Field
              text="First Name"
              type="text"
              name="firstName"
              fieldType="Input"
              length="2"
              func={(e) => handleConfig(e)}
              req
            />

            <Field
              text="Last Name"
              type="text"
              name="lastName"
              fieldType="Input"
              length="2"
              func={(e) => handleConfig(e)}
              req
            />

            <Field
              text="Email"
              type="email"
              name="email"
              fieldType="Input"
              func={(e) => handleConfig(e)}
              req
            />

            <Field
              text="Phone Number"
              type="text"
              name="phoneNumber"
              fieldType="Input"
              func={(e) => handleConfig(e)}
              req
            />

            <Field
              text="Username"
              type="text"
              name="username"
              fieldType="Input"
              func={(e) => handleConfig(e)}
              req
            />

            <Field
              text="Password"
              type="password"
              name="password"
              fieldType="Input"
              length="8"
              func={(e) => handleConfig(e)}
              req
            />

            <Field
              text="State"
              type="text"
              name="state"
              fieldType="Select"
              data={StatesList}
              func={(e) => handleStateConfig(e)}
              req
            />

            <Field
              text="Address"
              type="text"
              name="address"
              fieldType="Input"
              func={(e) => handleConfig(e)}
              req
            />
          </div>
          <Button
            type="submit"
            text="Sign up"
            width="47%"
            // margin="2.5rem 0 0 0 "
          />
          <p>
            Already have an account?
            <Link href="/login"> Sign in </Link>
          </p>
        </form>

        {/* end of post_person_info */}
      </div>

      {/* <!-- end of container --> */}
    </>
  );
}
