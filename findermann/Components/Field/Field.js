import React, { useEffect, useState } from "react";
import styles from "./Field.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Field = ({
  fieldType,
  type,
  text,
  name,
  dropDown,
  cols,
  rows,
  padding,
  margin,
  fontSize,
}) => {
  const [clickButton, setClickButton] = useState(true);
  const [filterName, setFilterName] = useState(text);
  // var filterName;

  const handleChange = () => {
    if (clickButton === true) {
      setClickButton(false);
    } else if (clickButton === false) {
      setClickButton(true);
    }
  };
  const changeFilter = (e) => {
    console.log(e.target.innerText);
    setFilterName(e.target.innerText);
  };

  if (fieldType == "Input") {
    return (
      <>
        {/* <!-- Start of Input Container --> */}
        <div className={styles.input_box}>
          <input
            type={type}
            placeholder={text}
            name={name}
            style={{
              margin: margin,
              padding: padding,
              fontSize: fontSize,
            }}
          />
        </div>
        {/* <!-- End of Input Container --> */}
      </>
    );
  } else if (fieldType == "Select") {
    return (
      <>
        {/* <!-- Start of Select Container --> */}

        <div
          className={styles.select_container}
          onClick={handleChange}
          name={name}
          id={name}
          style={{
            padding: padding,
            fontSize: fontSize,
          }}
        >
          {" "}
          <span
            className={` ${
              clickButton ? styles.button_span_off : styles.button_span_on
            }`}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
          {filterName}
          <ul
            className={`${styles.select_container_options} 
                    ${
                      clickButton
                        ? styles.container_disappear
                        : styles.Container_appear
                    }
                    `}
            onClick={() => {
              setClickButton(false);
            }}
          >
            <li onClick={changeFilter}>Location</li>
            <li onClick={changeFilter}>Missing</li>
            <li onClick={changeFilter}>Found</li>
          </ul>
        </div>

        {/* <!-- End of Select Container --> */}
      </>
    );
  } else if (fieldType == "TextArea") {
    return (
      <>
        {/* <!-- Start of Text Area Container --> */}
        <div className={styles.text_area_section}>
          <textarea
            name={name}
            placeholder={text}
            cols={cols}
            rows={rows}
          ></textarea>
        </div>
        {/* <!-- End of Text Area Container --> */}
      </>
    );
  }

  return null;
};

export default Field;
