import React, { useEffect } from "react";
import Axios from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Category from "../Components/Categories/CategoryPanel/CategoryPanel";
import CategoryCard from "../Components/Categories/CategoryCard/CategoryCard";
import CategoryItem from "../Components/Categories/CategoryItem/CategoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDog,
  faPhone,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* <!-- start of container --> */}
      <div className={styles.content}>
        <div className={styles.container}>
          {/* start of items_nav */}
          <div className={styles.items_nav}>
            {/* this is where u will see vehicles mobile phones electronics nav */}
            <Category text={"Vehicles"} icon={"car"} to={"/category"} />

            <Category
              text={"Mobile phones & tablets"}
              icon={"phone"}
              to={"/category"}
            />

            <Category text={"Electronics"} icon={"tv"} to={"/category"} />

            <Category
              text={" Home Funiture & Appliance"}
              icon={"chair"}
              to={"/category"}
            />

            <Category
              text={"Health & Beauty"}
              icon={"stethoscope"}
              to={"/category"}
            />

            <Category text={"Fashion"} icon={"tshirt"} to={"/category"} />

            <Category
              text={"Sports & outdoors"}
              icon={"volleyball-ball"}
              to={"/category"}
            />

            <Category text={"People"} icon={"users"} to={"/category"} />

            <Category text={"Animals & Pets"} icon={"dog"} to={"/category"} />

            <Category
              text={"Agriculture & Food"}
              icon={"hamburger"}
              to={"/category"}
            />

            <Category
              text={"Repair & Construction"}
              icon={"wrench"}
              to={"/category"}
            />

            <Category
              text={"Commercial Equipments & Tools"}
              icon={"toolbox"}
              to={"/category"}
            />
          </div>
          {/* end of items_nav */}

          {/* this where the main content will be located */}
          <main className={styles.main_content}>
            <div className="items_container">
              <div className="items_header">
                <h2>Popular in Fashion</h2>
                <Link href="/category" passHref>
                  <div className="items_header_link">
                    <p> View more </p>{" "}
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faChevronRight}
                    />
                  </div>
                </Link>
              </div>
              {/* start of items_grid */}
              <div className="items_grid">
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
              </div>
            </div>

            {/* this is another section that is using same styling with the first div box */}

            {/* just give them id if u want to differentiate them */}

            {/* start of another items_container */}

            <div className="items_container">
              <div className="items_header">
                <h2>Popular in Person</h2>
                <Link href="/category" passHref>
                  <div className="items_header_link">
                    <p> View more </p>{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={styles.icon}
                    />
                  </div>
                </Link>
              </div>
              {/* start of items_grid */}
              <div className="items_grid">
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
              </div>
              {/* End of items_grid */}
            </div>

            {/* Start of Other Popular Categories */}

            <div className="other_popular_categories">
              <h2>Other popular categories</h2>
              <div className={styles.popular_categories_grid}>
                <CategoryCard
                  text={"Commercial Equipments & Tools"}
                  icon={"toolbox"}
                  to={"/category"}
                />
                <CategoryCard
                  text={"Mobile phones & tablets"}
                  icon={"phone"}
                  to={"/category"}
                />
                <CategoryCard
                  text={"Animals & Pets"}
                  icon={"dog"}
                  to={"/category"}
                />
              </div>
            </div>

            {/* End of Other Popular Categories */}

            {/* this is another section that is using same styling with the first div box */}

            {/* just give them id if u want to differentiate them */}

            <div className="items_container">
              <div className="items_header">
                <h2>Popular in Electronics</h2>
                <Link href="/category" passHref>
                  <div className="items_header_link">
                    <p> View more </p>{" "}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={styles.icon}
                    />
                  </div>
                </Link>
              </div>

              {/* start of items_grid */}

              <div className="items_grid">
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />{" "}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Missing"
                  itemName="Nike Shoe"
                  itemStatus="Recovered"
                  itemReward="₦5,000.00"
                  to={"/missingItem"}
                  itemAd
                />
              </div>

              {/* start of items_grid */}
            </div>

            {/* end of another items_container */}
          </main>
        </div>
      </div>

      {/* <!-- end of container --> */}
    </>
  );
}
