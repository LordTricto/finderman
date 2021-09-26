import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import CategoryList from "../utils/categoryList";
import LocalGovernmentList from "../utils/localGovernmentList";
import StatesList from "../utils/statesList";
import { apiInstance } from "../utils/utils";

const ItemConfig = {
  nameOfItem: "",
  email: "",
  phoneNumber: "",
  address: "",
};
const ItemExtraConfig = {
  category: "",
  subcategory: "",
  state: "",
  localGovernment: "",
};
const subcategoryConfig = {
  name: "subcategory",
  value: "",
  label: "",
};

const ItemForm = () => {
  const [info, setInfo] = useState({ ...ItemConfig });
  const [extraInfo, setExtraInfo] = useState({ ...ItemExtraConfig });
  const [subcategory, setSubcategory] = useState([{ ...subcategoryConfig }]);
  const [errorMessage, setErrorMessage] = useState();
  const access_token = useSelector((state) => state.user.accessToken);
  const router = useRouter();

  const handleConfig = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleExtraConfig = (e) => {
    const { name, value } = e;
    setExtraInfo({
      ...extraInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (
      !info.nameOfItem === "-" ||
      !info.phoneNumber === "-" ||
      !info.email === "-" ||
      !info.address === "-" ||
      !extraInfo.category === "-" ||
      !subcategory.id === "-" ||
      !extraInfo.localGovernment === "-" ||
      !extraInfo.state === "-"
    ) {
      return null;
    }
    apiInstance
      .post(
        "/api/v1/item/create",
        {
          itemName: info.nameOfItem,
          contactEmail: info.email,
          contactPhoneNumber: info.phoneNumber,
          address: info.address,
          subcategory: subcategory.id,
          state: extraInfo.state,
          localGovernment: extraInfo.localGovernment,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log("done");
        //Redirect
        setInterval(() => {
          router.push("/postitem");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  const categoryValidate = ({ number }) => {
    apiInstance
      .get("/api/v1/category/get_subcategories/" + number)
      .then((res) => {
        const items = res.data.message;
        setSubcategory(
          items.map((item) => ({
            name: "subcategory",
            value: item.subcategoryName,
            id: item.subCategoryId,
            label: item.subcategoryName,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <>
        <div className="container">
          <div className="post_person_box">
            <h3 className="heading">Item Form</h3>
            <p className="some_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quis excepturi corrupti, rem voluptatum ducimus.
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="post_person_info">
                <Field
                  text="Category"
                  type="text"
                  name="category"
                  fieldType="Select"
                  data={CategoryList}
                  func={(e) => {
                    handleExtraConfig(e);
                    categoryValidate(e);
                  }}
                />

                <Field
                  text="Subcategory"
                  type="text"
                  name="subcategory"
                  fieldType="Select"
                  data={subcategory}
                  func={(e) => handleExtraConfig(e)}
                />

                <Field
                  text="Name of item"
                  type="text"
                  name="nameOfItem"
                  fieldType="Input"
                  func={(e) => handleConfig(e)}
                />

                <Field
                  text="Address"
                  type="text"
                  name="address"
                  fieldType="Input"
                  func={(e) => handleConfig(e)}
                />

                <Field
                  text="Email"
                  type="text"
                  name="email"
                  fieldType="Input"
                  func={(e) => handleConfig(e)}
                />

                <Field
                  text="State"
                  type="text"
                  name="state"
                  fieldType="Select"
                  data={StatesList}
                  func={(e) => handleExtraConfig(e)}
                />

                <Field
                  text="Phone Number"
                  type="text"
                  name="phoneNumber"
                  fieldType="Input"
                  func={(e) => handleConfig(e)}
                />

                <Field
                  text="Local Government"
                  type="text"
                  name="localGovernment"
                  fieldType="Select"
                  data={LocalGovernmentList}
                  func={(e) => handleExtraConfig(e)}
                />
              </div>
              {errorMessage && (
                <div className={styles.login_errorMessage}>
                  <p className={styles.login_message}>* {errorMessage}</p>
                </div>
              )}
              <div className="upload_images_section">
                <Button
                  type="submit"
                  text="Post"
                  width="70%"
                  margin="2.5rem 0"
                  to="/subscription"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemForm;
