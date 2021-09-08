import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./StatusCard.module.css";
import Image from "next/image";

const StatusCard = () => {
  return (
    <>
      {/* Start of Owner Status About Item */}
      <div className={styles.owner_status_about_item}>
        <p className={styles.owner_status_about_item__heading}>Status</p>
        <p className={styles.owner_status_about_item__content}>Recovered</p>
      </div>

      {/* End of Owner Status About Item  */}
    </>
  );
};

export default StatusCard;
