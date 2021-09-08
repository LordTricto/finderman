import Link from "next/link";
import styles from "./CategoryCard.module.css";
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

const CategoryCard = ({ text, icon, to }) => {
  return (
    <>
      <Link href={to}>
        <div className={styles.popular_categories_item}>
          <FontAwesomeIcon icon={icon} />
          <p>{text}</p>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
