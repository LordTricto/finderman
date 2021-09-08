import Link from "next/link";
import styles from "../styles/postItemOption.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const postItem = () => {
  return (
    <>
      <div className={styles.container}>
        {/* start of missing_or_found_container */}
        <div className={styles.missing_or_found_container}>
          {/* start of missing_div */}
          <Link href="/" passHref>
            <div className={styles.missing_div}>
              <div>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p>Missing</p>
              </div>
            </div>
          </Link>
          <div className={styles.middleLine}></div>
          <Link href="/foundItems" passHref>
            <div className={styles.missing_div}>
              <div>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <p>Found</p>
              </div>
            </div>
          </Link>
          {/* end of missing_div */}
        </div>
        {/* end of missing_or_found_container */}
      </div>
    </>
  );
};

export default postItem;
