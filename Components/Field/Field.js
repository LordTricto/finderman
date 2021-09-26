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
  cols,
  rows,
  padding,
  margin,
  fontSize,
  data,
}) => {
  const [customStyles, customTheme] = useSelectStyles();

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
