import React, { useState } from "react";
import styles from "./CategoryPanelTwo.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Buttons/Button";
import Field from "../../Field/Field";
import StatesList from "../../../utils/statesList";
import FilterType from "../../../utils/typeList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faPhone,
  faTv,
  faChair,
  faStethoscope,
  faTshirt,
  faVolleyballBall,
  faUsers,
  faDog,
  faHamburger,
  faWrench,
  faToolbox,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCar,
  faPhone,
  faTv,
  faChair,
  faStethoscope,
  faTshirt,
  faVolleyballBall,
  faUsers,
  faDog,
  faHamburger,
  faWrench,
  faToolbox,
  faPlus,
  faCheck
);

const ItemConfig = {
  reward: "",
  description: "",
};

const ItemExtraConfig = {
  status: "",
  contactMethod: "",
};

const CategoryPanel = ({ data }) => {
  const [info, setInfo] = useState({ ...ItemConfig });
  const [extraInfo, setExtraInfo] = useState({ ...ItemExtraConfig });
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showType, setShowType] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(false);

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
    console.log("object");
    // if (
    //   !info.reward === "-" ||
    //   !info.description === "-" ||
    //   !extraInfo.status === "-" ||
    //   !extraInfo.contactMethod === "-" ||
    //   !image === ""
    // ) {
    //   return null;
    // }
    // apiInstance
    //   .post(
    //     "/api/v1/item/create",
    //     {
    //       reward: info.reward,
    //       description: info.description,
    //       status: extraInfo.status,
    //       contactMethod: extraInfo.contactMethod,
    //       image: image,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("done");
    //     //Redirect
    //     setInterval(() => {
    //       router.push("/missingitems");
    //     }, 1000);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <form id="filterForm" name="filterForm" onSubmit={handleFormSubmit}>
            <div className={styles.location}>
              <p>Filter By location</p>

              <Field
                text="Location"
                type="text"
                name="location"
                fieldType="Select"
                func={this.filterForm.submit()}
                data={StatesList}
              />
            </div>
            <div className={styles.type}>
              <p>Filter By Type</p>

              <Field
                text="Type"
                type="text"
                name="type"
                fieldType="Select"
                data={FilterType}
              />
            </div>
          </form>
        </div>
        <div className={styles.category}>
          <p>Category</p>
          <div className={styles.category_list}>
            <div className={styles.category_main}>
              <FontAwesomeIcon
                className={styles.category_icon}
                icon={["fas", `${"car"}`]}
              />
              <p>{data[0].categoryName}</p>
            </div>
            <div className={styles.category_subMain}>
              {data.map((item) => {
                return (
                  <div className={styles.category_subLinks}>
                    <Link href="/category" passHref>
                      <div className={styles.category_content}>
                        <p>{item.subcategoryName}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.filter__container}>
          <div
            className={styles.filter__button}
            onClick={() => setShowMobileFilter(!showMobileFilter)}
          >
            Filter
          </div>
          <form
            className={`${
              showMobileFilter ? styles.filter__main : "displayNone"
            }`}
            onSubmit={handleFormSubmit}
          >
            <div>
              <div className={styles.filter__header}>
                <h2>Filter</h2>
                <FontAwesomeIcon
                  className={styles.filter__icon}
                  onClick={() => setShowMobileFilter(false)}
                  icon={faPlus}
                />
              </div>
              <div className={styles.filter__body}>
                <div className={styles.filter__links}>
                  <div
                    className={styles.filter__link}
                    onClick={() => setShowOptions(!showOptions)}
                  >
                    <div className={styles.filter__text}>
                      Category ({data[0].categoryName})
                    </div>
                    <div className={styles.filter__text}>
                      <span>{selectedCategory}</span>
                      <FontAwesomeIcon
                        className={styles.filter__icon}
                        icon={faPlus}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      showOptions ? styles.filter__options : "displayNone"
                    }`}
                  >
                    {data.map((item) => {
                      return (
                        <div
                          className={styles.filter__option}
                          onClick={() =>
                            setSelectedCategory(item.subcategoryName)
                          }
                        >
                          <span className={styles.filter__text}>
                            {item.subcategoryName}
                          </span>
                          <FontAwesomeIcon
                            className={styles.filter__icon}
                            className={`${
                              selectedCategory === item.subcategoryName
                                ? styles.filter__icon
                                : "displayNone"
                            }`}
                            icon={faCheck}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.filter__links}>
                  <div
                    className={styles.filter__link}
                    onClick={() => setShowLocation(!showLocation)}
                  >
                    <div className={styles.filter__text}>Location</div>
                    <div className={styles.filter__text}>
                      <span>{selectedLocation}</span>
                      <FontAwesomeIcon
                        className={styles.filter__icon}
                        icon={faPlus}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      showLocation ? styles.filter__search : "displayNone"
                    }`}
                  >
                    <Field
                      text="Location"
                      type="text"
                      name="location"
                      fieldType="Select"
                      func={(e) => setSelectedLocation(e.value)}
                      data={StatesList}
                    />
                  </div>
                </div>
                <div className={styles.filter__links}>
                  <div
                    className={styles.filter__link}
                    onClick={() => setShowType(!showType)}
                  >
                    <div className={styles.filter__text}>Type</div>
                    <div className={styles.filter__text}>
                      <span>{selectedType}</span>
                      <FontAwesomeIcon
                        className={styles.filter__icon}
                        icon={faPlus}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      showType ? styles.filter__search : "displayNone"
                    }`}
                  >
                    <Field
                      text="Type"
                      type="text"
                      name="type"
                      fieldType="Select"
                      func={(e) => setSelectedType(e.value)}
                      data={FilterType}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.filter__apply}>
                <Button
                  type="submit"
                  text="Apply"
                  width="100%"
                  fontSize="1rem"
                  margin="0 0 0 0"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryPanel;
