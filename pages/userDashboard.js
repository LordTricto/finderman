import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/userDashboard.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";

function userDashboard() {
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
                text="First Name"
                type="text"
                name="fName"
                fieldType="Input"
              />

              <Field
                text="Last Name"
                type="text"
                name="lName"
                fieldType="Input"
              />

              <Field text="Email" type="email" name="email" fieldType="Input" />

              <Field
                text="Phone Number"
                type="text"
                name="phoneNumber"
                fieldType="Input"
              />

              <Field text="Name" type="text" name="name" fieldType="Input" />

              <Field
                text="Address"
                type="text"
                name="address"
                fieldType="Input"
              />

              <Field
                text="State"
                type="text"
                name="state"
                fieldType="Select"
                dropDown
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

export default userDashboard;
