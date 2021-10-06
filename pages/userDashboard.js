import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as qs from "qs";
import { getUser } from "../redux/user/userActions/userActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { apiInstance } from "../utils/utils";
import StatesList from "../utils/statesList";
import styles from "../styles/userDashboard.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";

function UserDashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const access_token = useSelector((state) => state.user.accessToken);
  const [info, setInfo] = useState([]);

  const handleConfig = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleExtraConfig = (e) => {
    const { name, value } = e;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (!info.phoneNumber && !info.address && !info.username && !info.state) {
      return console.log("object");
    }

    apiInstance
      .patch(`/api/v1/user/update/${user.id}`, qs.stringify(info), {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(getUser(user.id, access_token));
      })
      .catch((err) => console.log(err));
  };
  console.log(info);
  return (
    <>
      <div className={styles.container}>
        <DashboardPanel />
        <div className={styles.post_person_box}>
          <h3 className={styles.heading}>Update Profile</h3>
          {/* start of post_person_info */}
          <form onSubmit={handleFormSubmit}>
            <div className={styles.post_person_info}>
              <Field
                text={user.firstName}
                type="text"
                name="firstName"
                fieldType="Input"
              />

              <Field
                text={user.lastName}
                type="text"
                name="lastName"
                fieldType="Input"
              />

              <Field
                text={user.email}
                type="email"
                name="email"
                fieldType="Input"
                readonly
              />

              <Field
                text={user.phoneNumber}
                type="text"
                name="phoneNumber"
                fieldType="Input"
                func={(e) => handleConfig(e)}
              />

              <Field
                text={user.username}
                type="text"
                name="username"
                fieldType="Input"
                func={(e) => handleConfig(e)}
              />

              <Field
                text={user.address}
                type="text"
                name="address"
                fieldType="Input"
                func={(e) => handleConfig(e)}
              />

              <Field
                text={user.state}
                type="text"
                name="state"
                fieldType="Select"
                data={StatesList}
                func={(e) => handleExtraConfig(e)}
              />
            </div>

            <Button
              type="submit"
              text="Update"
              width="70%"
              margin="2.5rem 0 0 0 "
            />
          </form>
          {/* end of post_person_info */}
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
