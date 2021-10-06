import styles from "./CategoryPanelTwo.module.css";
import Image from "next/image";
import Link from "next/link";
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

const CategoryPanel = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.location}>
            <p>Filter By location</p>
            <form>
              <Field
                text="Location"
                type="text"
                name="location"
                fieldType="Select"
                data={StatesList}
              />
            </form>
          </div>
          <div className={styles.type}>
            <p>Filter By Type</p>
            <form>
              <Field
                text="Type"
                type="text"
                name="type"
                fieldType="Select"
                data={FilterType}
              />
            </form>
          </div>
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
      </div>
    </>
  );
};

export default CategoryPanel;
