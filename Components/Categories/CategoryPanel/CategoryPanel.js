import styles from "./CategoryPanel.module.css";
import Image from "next/image";
import Link from "next/link";
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
  faChevronRight,
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
  faToolbox
);

const CategoryPanel = ({ icon, text, to }) => {
  return (
    <>
      {/* this is where u will see vehicles mobile phones electronics nav */}
      <div className={styles.category}>
        <FontAwesomeIcon
          className={styles.category_icon}
          icon={["fas", `${icon}`]}
        />
        <Link href={to} passHref>
          <div className={styles.category_content}>
            <p>{text} </p>
            <FontAwesomeIcon
              className={styles.category_link_icon}
              icon={faChevronRight}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryPanel;
