import React from "react";
import styles from "./Field.module.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useSelectStyles from "../../hooks/useSelectStyles";
const Field = ({
  fieldType,
  type,
  text,
  name,
  func,
  length,
  req,
  readonly,
  cols,
  rows,
  padding,
  margin,
  fontSize,
  data,
}) => {
  const [customStyles, customTheme] = useSelectStyles();

  const customNavStyles = {
    menu: (provided, state) => ({
      ...provided,
      overflow: "hidden",
      fontSize: "1rem",
      borderRadius: "10px",
      backgroundColor: "#f4f4f4",
      fontSize: "1rem",
      margin: "0",
      color: "rgb(13, 50, 92)",
      width: "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      minHeight: "3rem",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem",
      height:"100%",
      borderRadius: "0 50px 50px 0",
      backgroundColor: "#ffff",
      fontSize: "0.8rem",
      fontWeight:"500",
      padding: "0 1rem",
      color: "rgb(13, 50, 92)",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  }
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
            readOnly={readonly}
            style={{
              margin: margin,
              padding: padding,
              fontSize: fontSize,
            }}
            minLength={length}
            required={req}
            // autoComplete="current-password"
          />
        </div>
        {/* <!-- End of Input Container --> */}
      </>
    );
  } else if (fieldType == "Select") {
    return (
      <>
        {/* <!-- Start of Select Container --> */}

        <Select
          classNamePrefix="react-select"
          components={makeAnimated()}
          onChange={func}
          theme={customTheme}
          styles={customStyles}
          options={data}
          placeholder={text}
          noOptionsMessage={() => "no more options :("}
          isSearchable
        />

        {/* <!-- End of Select Container --> */}
      </>
    );
  } else if (fieldType == "navSelect") {
    return (
      <>
        {/* <!-- Start of Select Container --> */}

        <Select
          classNamePrefix="react-select-nav"
          components={makeAnimated()}
          onChange={func}
          theme={customTheme}
          styles={customNavStyles}
          options={data}
          placeholder={text}
          noOptionsMessage={() => "no more options :("}
          isSearchable
        />

        {/* <!-- End of Select Container --> */}
      </>
    );
  }else if (fieldType == "TextArea") {
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
