import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import States from "../utils/states";
import styles from "../styles/userDashboard.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";

function UserDashboard() {
  const user = useSelector((state) => state.user.userInfo); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(user);
  return (
    <>
      <div className={styles.container}>
        <DashboardPanel />
        <div className={styles.post_person_box}>
          <h3 className={styles.heading}>Update Profile</h3>
          {/* start of post_person_info */}
          <form action="" id="">
            <div className={styles.post_person_info}>
              <Field
                text={user.firstName}
                type="text"
                name="fName"
                fieldType="Input"
              />

              <Field
                text={user.lastName}
                type="text"
                name="lName"
                fieldType="Input"
              />

              <Field
                text={user.email}
                type="email"
                name="email"
                fieldType="Input"
              />

              <Field
                text={user.phoneNumber}
                type="text"
                name="phoneNumber"
                fieldType="Input"
              />

              <Field
                text={user.username}
                type="text"
                name="name"
                fieldType="Input"
              />

              <Field
                text={user.address}
                type="text"
                name="address"
                fieldType="Input"
              />

              <Field
                text={user.state}
                type="text"
                name="state"
                fieldType="Select"
                data={States}
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
