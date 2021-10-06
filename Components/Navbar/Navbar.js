import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Field from "../Field/Field";
import StatusList from "../../utils/statusList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/userActions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [clickButton, setClickButton] = useState(true);
  const [filterName, setFilterName] = useState("Location");
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const handleChange = () => {
    if (clickButton === true) {
      setClickButton(false);
    } else if (clickButton === false) {
      setClickButton(true);
    }
  };

  const changeFilter = (e) => {
    console.log(e.target.innerText);
    setFilterName(e.target.innerText);
  };
  return (
    <>
      {/* <!-- start of nav --> */}

      <nav>
        <div className={styles.nav}>
          <Link href="/" passHref>
            <h2 id={styles["finderman-Logo"]}>Finderman</h2>
          </Link>
          {/* Start of mobile navlinks */}

          <ul className={styles.navlinks}>
            <form action="">
              {/* <!-- start of input container --> */}

              <div className={styles.inputContainer}>
                <input type="text" id="searchText" placeholder="Search"></input>
                {/* <!-- start of select container --> */}

                <div className={styles["select-container"]}>
                  <div className={styles["select-icon"]}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  <select className={styles.select} id="filter" value="a">
                    <option value="a" selected>
                      Location
                    </option>
                    <option value="b">Hello World</option>
                  </select>
                </div>

                {/* <!-- end of select continer --> */}
              </div>
              <button className={`${styles.btn} ${styles["nav-search"]}`}>
                Search
              </button>

              {/* <!-- end of input container --> */}
            </form>

            <li>
              <Link href="/category" passHref>
                Missing items
              </Link>
            </li>
            <li>
              <Link href="/category" passHref>
                Found items
              </Link>
            </li>
            <li>
              <Link href="/login" passHref>
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/signup" passHref>
                Register
              </Link>
            </li>
            <li>
              <Link href="/postItem" passHref>
                Post Ad
              </Link>
            </li>
          </ul>

          {/* End of mobile navlinks */}

          {/* Start of laptop navlinks */}

          <ul className={styles.laptop_navlinks}>
            <form action="">
              {/* <!-- start of input container --> */}
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id={styles.laptop_navlinks_searchText}
                  placeholder="Search"
                ></input>

                {/* <!-- start of select container --> */}
                <Field
                  text="Location"
                  type="text"
                  name="filter"
                  fieldType="navSelect"
                  data={StatusList}
                  // func={(e) => handleExtraConfig(e)}
                />
               {/* <!-- end of select continer --> */}
              </div>
              <button className={`${styles.btn} ${styles.nav_search}`}>
                Search
              </button>
              {/* <!-- end of input container --> */}
            </form>

            <div className={styles.extra_links}>
              <div
                className={`${styles["extra_links__links"]} ${styles["extra_links__links--spaceOne"]}`}
              >
                <Link href="/category" passHref>
                  <li className={`${styles["extra_links__item"]}`}>
                    Missing items
                  </li>
                </Link>
                <Link href="/category" passHref>
                  <li
                    className={`${styles["extra_links__item"]} ${styles["extra_links__item--padding"]}`}
                  >
                    Found items
                  </li>
                </Link>
              </div>

              <div
                className={`${styles["extra_links__links"]} ${styles["extra_links__links--spaceTwo"]}`}
              >
                {loggedIn ? (
                  <li className={styles.extra_links__links_loggedIn}>
                    <Link href="/userdashboard" passHref>
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <span
                      onClick={() => {
                        dispatch(logout());
                        router.push("/");
                      }}
                    >
                      LogOut
                    </span>
                  </li>
                ) : (
                  <li>
                    <Link href="/login" passHref>
                      Signin
                    </Link>
                    <Link href="/register" passHref>
                      /Register
                    </Link>
                  </li>
                )}
                <li
                  className={`${styles["extra_links__item"]} ${styles["extra_links__item--padding"]}`}
                >
                  <Link href="/itemform" passHref>
                    <div className={styles.post_ad}>Post Ad</div>
                  </Link>
                </li>
              </div>
            </div>
          </ul>

          {/* End of mobile navlinks */}

          {/* --------------------------- */}

          {/* Start of Mobile Hamburger */}

          <div className={styles.ham}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          {/* End of Mobile Hamburger */}
        </div>
      </nav>

      {/* end of nav  */}
    </>
  );
};

export default Navbar;
