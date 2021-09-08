import styles from "./CategoryPanelTwo.module.css";
import Image from "next/image";
import Link from "next/link";
import Field from "../../Field/Field";
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

const CategoryPanel = () => {
  return (
    <>
      {/* start of items_nav */}
      <div className={styles.container}>
        {/* this is where u will see vehicles mobile phones electronics nav */}
        <div className={styles.filters}>
          <div className={styles.location}>
            <p>Filter By location</p>
            <form action="">
              <Field
                text="Location"
                type="text"
                name="location"
                fieldType="Select"
                dropDown
              />
            </form>
          </div>
          <div className={styles.type}>
            <p>Filter By Type</p>
            <form action="">
              <Field
                text="Type"
                type="text"
                name="type"
                fieldType="Select"
                dropDown
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
              <p>Vehicle </p>
            </div>
            <div className={styles.category_subMain}>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Cars</p>
                  </div>
                </Link>
              </div>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Buses & Micro Buses</p>
                  </div>
                </Link>
              </div>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Heavy Equipment</p>
                  </div>
                </Link>
              </div>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Motorcycles & Scooters</p>
                  </div>
                </Link>
              </div>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Truck & Trailers</p>
                  </div>
                </Link>
              </div>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Vehicles Parts & Accessories</p>
                  </div>
                </Link>
              </div>
              <div className={styles.category_subLinks}>
                <Link href="/category" passHref>
                  <div className={styles.category_content}>
                    <p>Watercraft & Boats</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* <CategoryNav text={"Vehicles"} icon={"car"} to={"/login"} /> */}
        </div>
      </div>
      {/* end of items_nav */}
      {/* this is where u will see vehicles mobile phones electronics nav */}
    </>
  );
};

export default CategoryPanel;
