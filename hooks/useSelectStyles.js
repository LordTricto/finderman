const useSelectStyles = () => {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#fcfcfc;",
        primary: "#1a508c",
      },
    };
  }
  const customStyles = {
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
      height: "3.5rem",
      padding: "1.2rem 2rem",
      fontSize: "1rem",
      borderRadius: "50px",
      backgroundColor: "#ececec99",
      fontSize: "1rem",
      color: "rgb(13, 50, 92)",
      margin: "1.3rem 0",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };
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
  return [customStyles, customNavStyles, customTheme];
};

export default useSelectStyles;
