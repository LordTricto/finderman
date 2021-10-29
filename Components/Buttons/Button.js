import styles from "./Button.module.css";
import Image from "next/image";
import Link from "next/link";
const Button = ({
  text,
  width,
  margin,
  borderRadius,
  fontSize,
  to,
  padding,
}) => {
  return (
    <>
      {/* <!-- start of Button container --> */}
      <div className={styles.button__container}>
        {/* <Link href={`${to}`}> */}
        <button
          className={styles.button}
          type="submit"
          value={text}
          style={{
            width: width,
            margin: margin,
            padding: padding,
            borderRadius: borderRadius,
            fontSize: fontSize,
          }}
        >
          {text}
        </button>
        {/* </Link> */}
      </div>
      {/* <!-- end of Button container --> */}
    </>
  );
};

export default Button;
