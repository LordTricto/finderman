import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/category.module.css";
import CategoryNav from "../../Components/Categories/CategoryPanelTwo/CategoryPanelTwo";
import CategoryItem from "../../Components/Categories/CategoryItem/CategoryItem";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://findermann.herokuapp.com/api/v1/category/get"
  );
  const data = await res.json();

  const paths = data.message.map((category) => {
    return {
      params: {
        id: category.categoryId.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// const categories = JSON.stringify(data.message);
//   console.log(data);
//   const paths = data.map((ninja) => {
//     const _id = JSON.stringify(ninja.id);
//     console.log(ninja);
//     return {
//       params: {
//         id: _id,
//       },
//     };
//   });

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://findermann.herokuapp.com/api/v1/category/get_subcategories/" + id
  );
  const data = await res.json();

  return {
    props: {
      category: data.message,
    },
  };
};

export default function Category({ category }) {
  console.log(category);
  // useEffect(() => {}, []);
  const changeFilter = (e) => {
    // apiInstance
    //   .post(
    //     "/api/v1/item/create/?category=${e}",
    //     {
    //       reward: info.reward,
    //       description: info.description,
    //       status: extraInfo.status,
    //       contactMethod: extraInfo.contactMethod,
    //       image: image,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("done");
    //     //Redirect
    //     setInterval(() => {
    //       router.push("/missingitems");
    //     }, 1000);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <!-- start of container --> */}
      <div className={styles.content}>
        <div className={styles.container}>
          {/* start of items_nav */}
          <div className={styles.items_nav}>
            {/* this is where u will see vehicles mobile phones electronics nav */}
            <CategoryNav data={category} func1={(e) => changeFilter(e)} />{" "}
          </div>
          {/* end of items_nav */}

          {/* this where the main content will be located */}
          <main className={styles.main_content}>
            <div className="items_container">
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
          </main>
        </div>
      </div>

      {/* <!-- end of container --> */}
    </>
  );
}
