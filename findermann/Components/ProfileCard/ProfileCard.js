import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProfileCard.module.css";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <>
      {/* Start of Owner Contact Panel  */}
      <div className={styles.owner_contact_pane}>
        <p className={styles.category}>Missing</p>
        <button
          className={`${styles["extra_details_pane_btn "]} ${styles["blue"]} ${styles["close_extra_details_pane"]}`}
        >
          close
        </button>
        <div className={styles.owner_contact_pane_top}>
          <div className={styles.owner_image_box}>
            <Image
              layout="responsive"
              src="/assets/user.jpg"
              width={180}
              height={180}
              alt="User"
            />
          </div>
          <p className={styles.owner_name}>Sammy</p>
        </div>
        <button
          className={`${styles["extra_details_pane_btn"]} ${styles["red"]}`}
        >
          {" "}
          <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
          <span className={styles.text}>Show Contact</span>
        </button>
        <button
          className={`${styles["extra_details_pane_btn"]} ${styles["blue"]}`}
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span className={styles.text}>Send Message</span>
        </button>
      </div>

      {/* End of Owner Contact Panel */}
    </>
  );
};

export default ProfileCard;
