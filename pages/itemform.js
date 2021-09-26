import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import CategoryList from "../utils/categoryList";
import SubcategoryList from "../utils/subcategoriesList";
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
  const router = useRouter();

  useEffect(() => {
    console.log(subcategory);
  }, [subcategory]);

  // router.push("/userdashboard")
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
      !info.firstName === "-" ||
      !info.lastName === "-" ||
      !info.phoneNumber === "-" ||
      !info.email === "-" ||
      !info.address === "-" ||
      !info.username === "-" ||
      !info.password ||
      !info.stateInfo === "-"
    ) {
      return null;
    }
    apiInstance
      .post("/api/v1/user/register", {
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        phoneNumber: info.phoneNumber,
        address: info.address,
        password: info.password,
        username: info.username,
        state: stateInfo.state,
      })
      .then((res) => {
        const user_info = res.data;
        const error_message = res.data.message;
        res.data.status === "success"
          ? dispatch(loginSuccess(user_info))
          : setErrorMessage(error_message);
      })
      .catch((err) => console.log(err));
  };
  const categoryValidate = ({ number }) => {
    apiInstance
      .get("/api/v1/category/get_subcategories/" + number)
      .then((res) => {
        res.data.message.map((item) => {
          return setSubcategory(item.subcategoryName);
        });
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
                  data={SubcategoryList}
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
            </form>
            <div className="upload_images_section">
              <Button
                type="submit"
                text="Post"
                width="70%"
                margin="2.5rem 0"
                to="/subscription"
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ItemForm;
