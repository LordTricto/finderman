import styles from "./CategoryItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
const CategoryItem = ({
  imageSrc,
  itemStatus,
  itemName,
  itemSection,
  itemCategory,
  itemReward,
  to,
  itemAd,
}) => {
  useEffect(() => {
    console.log(to);
  }, []);
  return (
    <>
      {/* start of item */}
      <Link href={`${to}`} passHref>
        <div className={styles.item}>
          <Image
            className={styles.item_pics}
            layout="responsive"
            src={imageSrc}
            width={175}
            height={175}
            alt="Item"
          />
          <div
            className={`${styles.item_content} ${
              itemSection == "found"
                ? styles["item_content-heightShort"]
                : styles["item_content-heightTall"]
            } `}
          >
            <div className={itemSection == "found" ? "displayNone" : null}>
              <div className={styles.item_missing_or_found}>
                <p>{itemSection}</p>
              </div>
              <p className={styles.item_name}>{itemName}</p>
              <p className={styles.item_status}>
                Status: &nbsp;
                {itemStatus}
              </p>
              <p className={styles.item_reward}>
                Reward: &nbsp;
                {itemReward}
              </p>
              <div className={`${itemAd ? styles.item_ad : "displayNone"}`}>
                Boosted
              </div>
            </div>
            <div
              className={
                itemSection == "found" ? styles.found_items : "displayNone"
              }
            >
              <p
                className={`${
                  itemAd ? styles.floating_boosted : "displayNone"
                }`}
              >
                Boosted
              </p>
              <p className={styles.item_name}>{itemName}</p>
              <div className={styles.item_status}>
                Section: &nbsp;{itemSection}
              </div>
              <p className={styles.item_category}>
                Category: &nbsp;
                {itemCategory}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* start of item */}
    </>
  );
};

export default CategoryItem;
