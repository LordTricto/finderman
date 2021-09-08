import Link from "next/link";
import styles from "../styles/contactUs.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function contactUs() {
  return (
    <div>
      {/* start of container */}
      <div
        className={`${styles["container"]} ${styles["container-in-contactus"]}`}
      >
        {/* start of user_nav_pane */}
        <div
          className={`${styles["user_nav_pane"]} ${styles["contact_us_info_pane"]}`}
        >
          <p className={styles.contact_us_info_pane_header}>Contact Us</p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
            +234 906 065 0951
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            support@findermann.com
          </p>
          <div className={styles.circle_box}>
            <div className={styles.blue_circle} />
            <div className={styles.light_pink_circle} />
            <div className={styles.purple_circle} />
          </div>
          <div className={styles.contact_us_info_pane_socials}>
            <Link href="/" passHref>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className={styles.icon}
              />
            </Link>
            <Link href="/" passHref>
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            </Link>
            <Link href="/" passHref>
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </Link>
          </div>
        </div>
        {/* end of user_nav_pane */}
        <div className={`${styles["post_person_box"]} ${styles["contactBox"]}`}>
          {/* <h3 class="heading" >Update Profile</h3> */}
          {/* start of post_person_info */}
          <form action="" id="">
            {/* start of post_person_info */}
            <div className={styles.post_person_info}>
              <Field
                text="First Name"
                type="text"
                name="fName"
                fieldType="Input"
                className={styles.contact_input}
              />

              <Field
                text="Last Name"
                type="text"
                name="lName"
                fieldType="Input"
                className={styles.contact_input}
              />
            </div>
            {/* end of post_person_info */}

            <Field
              text="Email"
              type="email"
              name="email"
              className={styles.contact_input}
              fieldType="Input"
            />

            <Field
              text="State"
              type="text"
              name="state"
              fieldType="Select"
              dropDown
            />

            <Field
              text="Message"
              name="message"
              cols="30"
              rows="10"
              fieldType="TextArea"
              className={styles.text_area_section}
            />

            <div className={styles.submit_contact_btn}>
              <Button
                type="submit"
                text="Send"
                width="100%"
                margin="0 0 0 0 "
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </form>
          {/* end of post_person_info */}
        </div>
      </div>
      {/* end of container */}
    </div>
  );
}

export default contactUs;
