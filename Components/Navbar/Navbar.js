import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [clickButton, setClickButton] = useState(true);
  const [filterName, setFilterName] = useState("Location");
  // var filterName;

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
                  <select className={styles.select} id="filter">
                    <option value="" selected>
                      Location
                    </option>
                    <option value="">Hello World</option>
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

                <div className={styles.select_container} onClick={handleChange}>
                  {" "}
                  <span
                    className={` ${
                      clickButton
                        ? styles.button_span_off
                        : styles.button_span_on
                    }`}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  {filterName}
                  <ul
                    className={`${styles.select_container_options} 
                    ${
                      clickButton
                        ? styles.container_disappear
                        : styles.Container_appear
                    }
                    `}
                    onClick={() => {
                      setClickButton(false);
                    }}
                  >
                    <li onClick={changeFilter}>Location</li>
                    <li onClick={changeFilter}>Missing</li>
                    <li onClick={changeFilter}>Found</li>
                  </ul>
                </div>

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
                <li>
                  <Link href="/login" passHref>
                    Signin
                  </Link>
                  <Link href="/signup" passHref>
                    /Register
                  </Link>
                </li>
                <li
                  className={`${styles["extra_links__item"]} ${styles["extra_links__item--padding"]}`}
                >
                  <Link href="/postItem" passHref>
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
