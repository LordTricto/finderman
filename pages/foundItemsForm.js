import React from "react";
import styles from "../styles/foundItemsForm.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
const foundItemsForm = () => {
  return (
    <>
      <div className="container">
        <div className="post_person_box">
          <h3 className="heading">Post Found Items</h3>
          <p className="some_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis
            excepturi corrupti, rem voluptatum ducimus.
          </p>
          {/* start of post_person_info */}
          <form action="" id="" className="post_person_info">
            <Field
              text="Category"
              type="text"
              name="category"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Select"
              dropDown
            />

            <Field
              text="Sub-Category"
              type="text"
              name="subCategory"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Select"
              dropDown
            />

            <Field
              text="Name of item"
              type="text"
              name="nameOfItem"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Input"
            />

            <Field
              text="Address"
              type="text"
              name="address"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Input"
            />

            <Field
              text="Email"
              type="email"
              name="email"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Input"
            />

            <Field
              text="State"
              type="text"
              name="state"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Select"
              dropDown
            />

            <Field
              text="Phone Number"
              type="text"
              name="phoneNumber"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Input"
            />

            <Field
              text="Local Government"
              type="text"
              name="localGovernment"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Select"
              dropDown
            />

            <Field
              text="Police Station Holding item"
              type="text"
              name="policeStation"
              padding="1.2rem 2rem"
              fontSize="1rem"
              fieldType="Input"
            />
          </form>
          {/* end of post_person_info */}
          <Button
            type="submit"
            text="Post"
            width="70%"
            margin="2.5rem 0 0 0 "
          />
        </div>
      </div>
    </>
  );
};

export default foundItemsForm;
