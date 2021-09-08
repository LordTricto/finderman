import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/subscription.module.css";
import Button from "../Components/Buttons/Button";
import Image from "next/image";

function subscription() {
  return (
    <>
      {/* start of container */}
      <div className={`${styles["container"]} ${styles["price_container"]}`}>
        {/* start of price_card */}
        <div className={styles.price_card}>
          {/* start of price_header_container */}
          <div className={styles.price_header_container}>
            <div className={styles.price_category}>
              <h3>Free</h3>
              <div className={styles.price_category_underline} />
            </div>
          </div>
          {/* end of price_header_container */}
          <div className={styles.price_body_container}>
            <span className={styles.price_listed_item}>
              <FontAwesomeIcon icon={faCheck} />
              <p>Top uploads for a week</p>
            </span>
            <div className={styles.subscribe_btn}>
              <Button
                to="/checkout"
                text="Subscribe"
                width="100%"
                margin="1.3rem 0 0 0"
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </div>
        </div>
        {/* end of price_card */}
        {/* start of price_card */}
        <div className={styles.price_card}>
          {/* start of price_header_container */}
          <div className={styles.price_header_container}>
            <div className={styles.price_category}>
              <h3>Lite</h3>
              <div className={styles.price_category_underline} />
            </div>
            <p className={styles.price_amount_details}>
              <span className={styles.price_amount}>800 naira</span>
              <br />
              <span className={styles.price_duration}>Weekly</span>
            </p>
          </div>
          {/* end of price_header_container */}
          <div className={styles.price_body_container}>
            <span className={styles.price_listed_item}>
              <FontAwesomeIcon icon={faCheck} />

              <p>Top uploads for a week</p>
            </span>
            <span className={styles.price_listed_item}>
              <FontAwesomeIcon icon={faCheck} />

              <p>7X visibility chance</p>
            </span>
            <div className={styles.subscribe_btn}>
              <Button
                to="/checkout"
                text="Subscribe"
                width="100%"
                margin="1.3rem 0 0 0"
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </div>
        </div>
        {/* end of price_card */}
        {/* start of price_card */}
        <div className={styles.price_card}>
          {/* start of price_header_container */}
          <div className={styles.price_header_container}>
            <div className={styles.price_category}>
              <h3>Pro</h3>
              <div className={styles.price_category_underline} />
            </div>
            <p className={styles.price_amount_details}>
              <span className={styles.price_amount}>2500 naira</span>
              <br />
              <span className={styles.price_duration}>monthly</span>
            </p>
          </div>
          {/* end of price_header_container */}
          <div className={styles.price_body_container}>
            <span className={styles.price_listed_item}>
              <FontAwesomeIcon icon={faCheck} />
              <p>Top uploads for a week</p>
            </span>
            <span className={styles.price_listed_item}>
              <FontAwesomeIcon icon={faCheck} />
              <p>7X visibility chance</p>
            </span>

            <div className={styles.subscribe_btn}>
              <Button
                to="/checkout"
                text="Subscribe"
                width="100%"
                margin="1.3rem 0 0 0"
                borderRadius="7px"
                fontSize="1rem"
              />
            </div>
          </div>
        </div>
        {/* end of price_card */}
      </div>
      {/* end of container */}
    </>
  );
}

export default subscription;
