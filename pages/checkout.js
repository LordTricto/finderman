import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/checkout.module.css";
import Button from "../Components/Buttons/Button";
import Field from "../Components/Field/Field";
import Image from "next/image";

function checkout() {
  return (
    <>
      {/* start of container */}
      <div
        className={`${styles["container"]} ${styles["checkout-page-container"]}`}
      >
        {/* start of customer_detail_pane */}
        <div
          className={`${styles["post_person_box"]} ${styles["customer_detail_pane"]}`}
        >
          {/* <h3 class="heading" >Update Profile</h3> */}
          <h3 className={styles.heading}>Customer Details</h3>
          <br />
          {/* start of post_person_info */}
          <form action="" id="">
            {/* start of post_person_info */}
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
            </div>
            {/* end of post_person_info */}
            <Field text="Email" type="email" name="email" fieldType="Input" />

            <Field
              text="Phone Number"
              type="text"
              name="phoneNumber"
              fieldType="Input"
            />
            <Field
              text="Address"
              type="text"
              name="address"
              fieldType="Input"
            />
          </form>
          {/* end of post_person_info */}
        </div>
        {/* end of customer_detail_pane */}
        {/* start customer_order_summary_pane */}
        <div
          className={`${styles["post_person_box"]} ${styles["customer_order_summary_pane"]}`}
        >
          <h3 className={styles.heading}>Order Summary</h3>

          <div
            className={styles.customer_order_summary_pane__price_and_package}
          >
            <p className={styles.package}>Pro</p>
            <div className={styles.price}>₦2500.00</div>
          </div>
          <div className={styles.paystack_image_container}>
            <Image
              layout="responsive"
              src="/assets/paystack-logo1.png"
              width={200}
              height={70}
              alt="Paystack"
            />
          </div>

          <Button
            type="submit"
            text="Pay Now"
            width="100%"
            margin="1rem"
            borderRadius="7px"
          />
        </div>
        {/* end customer_order_summary_pane */}
      </div>
      {/* end of container */}
    </>
  );
}

export default checkout;
