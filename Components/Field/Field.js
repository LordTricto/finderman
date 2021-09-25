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
  func,
  length,
  req,
  cols,
  rows,
  padding,
  margin,
  fontSize,
  data,
}) => {
  const [clickButton, setClickButton] = useState(true);
  // const [require, setRequire] = useState(false);
  const [filterName, setFilterName] = useState(text);
  // var filterName;
  // useEffect(() => {
  //   setRequire(required);
  // }, [req]);

  const handleChange = () => {
    if (clickButton === true) {
      setClickButton(false);
    } else if (clickButton === false) {
      setClickButton(true);
    }
  };
  const changeFilter = (e) => {
    setFilterName(e.target.innerText);
  };
  // console.log(text);
  if (fieldType == "Input") {
    return (
      <>
        {/* <!-- Start of Input Container --> */}
        <div className={styles.input_box}>
          <input
            type={type}
            placeholder={`${text}`}
            name={name}
            onChange={func}
            style={{
              margin: margin,
              padding: padding,
              fontSize: fontSize,
            }}
            minLength={length}
            required={req}
            autoComplete="current-password"
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
          {filterName ? filterName : "State"}
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
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => {
                    changeFilter(e);
                    {
                      func(e);
                    }
                  }}
                >
                  {item.value}
                </li>
              );
            })}
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
