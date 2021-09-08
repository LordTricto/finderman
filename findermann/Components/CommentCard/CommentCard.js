import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import styles from "./CommentCard.module.css";
import Image from "next/image";

const CommentCard = () => {
  return (
    <>
      <div className={styles.comment_box}>
        <div className={styles.comment_owner_info}>
          <div className={styles.owner_of_comment_image}>
            <Image
              layout="responsive"
              src="/assets/user.jpg"
              width={200}
              height={200}
              alt="User"
            />
          </div>
          <p className={styles.owner_comment_name}>John Doe</p>
        </div>
        <div className={styles.owner_comment_text}>
          Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tenetur excepturi tempora, laboriosam earum asperiores, soluta nam
          quod vitae nobis libero vero ipsam explicabo id ab voluptas dolor
          dolores unde quidem! dolor sit amet consectetur adipisicing elit.
          Delectus, voluptas!
        </div>
      </div>
    </>
  );
};

export default CommentCard;
