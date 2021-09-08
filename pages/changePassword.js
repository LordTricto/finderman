import Link from "next/link";
import styles from "../styles/changePassword.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";

function changePassword() {
  return (
    <>
      {/* start of container */}
      <div className={styles.container}>
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className={styles.post_person_box}>
          <h3 className={styles.heading}>Change Password</h3>
          {/* start of post_person_info */}
          <form action id>
            <div className={styles.input_stacking_on_eachOther}>
              <Field
                text="Old Password"
                type="password"
                name="password"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />

              <Field
                text="New Password"
                type="password"
                name="password"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />

              <Field
                text="Confirm Password"
                type="password"
                name="password"
                fieldType="Input"
                padding="1.2rem 2rem"
                fontSize="1rem"
              />
            </div>

            <Button
              type="submit"
              text="Update Password"
              width="50%"
              margin="2.5rem 0 0 0 "
            />
          </form>
          {/* end of post_person_info */}
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default changePassword;
