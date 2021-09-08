import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/foundItems.module.css";
import Category from "../Components/Categories/CategoryPanel/CategoryPanel";
import CategoryItem from "../Components/Categories/CategoryItem/CategoryItem";
import Field from "../Components/Field/Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faDog,
  faPhone,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const foundItems = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          {/* start of items_nav */}
          <div className={styles.items_nav}>
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

            <h2
              style={{ fontSize: "1rem", color: "#1A508C", padding: ".9rem 0" }}
            >
              Category
            </h2>

            {/* this is where u will see vehicles mobile phones electronics nav */}

            <Category text={"Vehicles"} icon={"car"} to={"/login"} />

            <Category
              text={"Mobile phones & tablets"}
              icon={"phone"}
              to={"/login"}
            />

            <Category text={"Eletronics"} icon={"tv"} to={"/login"} />

            <Category
              text={"Home Funiture & Appliance"}
              icon={"chair"}
              to={"/login"}
            />

            <Category
              text={"Health & Beauty"}
              icon={"stethoscope"}
              to={"/login"}
            />

            <Category text={"Fashion"} icon={"tshirt"} to={"/login"} />

            <Category
              text={"Sports & outdoors"}
              icon={"volleyball-ball"}
              to={"/login"}
            />

            <Category text={"People"} icon={"users"} to={"/login"} />

            <Category text={"Animals & Pets"} icon={"dog"} to={"/login"} />

            <Category
              text={"Agriculture & Food"}
              icon={"hamburger"}
              to={"/login"}
            />

            <Category
              text={"Repair & Construction"}
              icon={"wrench"}
              to={"/login"}
            />

            <Category
              text={"Commercial Equipments & Tools"}
              icon={"toolbox"}
              to={"/login"}
            />
          </div>
          {/* end of items_nav */}
          {/* this where the main content will be located */}
          <main className={styles.main_content}>
            <div className={styles.items_container}>
              {/* start of items_grid */}
              <div
                className={`${styles["items_grid"]} ${styles["foundItems_grid"]}`}
              >
                {/* start of item */}
                {/* u can use div or a tag depending on what u want */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />
                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
                {/* start of item */}
                <CategoryItem
                  imageSrc="https://res.cloudinary.com/dozs7fkuv/image/upload/v1615858412/images/fa5cjxllphzzky34gnwo.jpg"
                  itemSection="Found"
                  itemName="Nike Shoe"
                  itemAd
                  itemCategory="fashion"
                />

                {/* start of item */}
              </div>
              {/* start of items_grid */}
            </div>
          </main>
          {/* end of  this where the main content will be located */}
        </div>
      </div>
    </>
  );
};

export default foundItems;
