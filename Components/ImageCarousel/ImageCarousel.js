import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

function ImageCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <div className={styles.icon_left} onClick={prevSlide}>
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
      </div>
      <div className={styles.icon_right} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
      </div>
      <div className={styles.pictureTotal}>
        <FontAwesomeIcon icon={faCamera} className={styles.icon} />

        <p> {length} </p>
      </div>
      {slides.map((slide, index) => {
        return (
          <div
            className={`${styles.slide} ${
              index === current ? styles.active : null
            }`}
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                alt="travel image"
                // className={styles.image}
                width={715}
                height={490}
                // layout="responsive"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageCarousel;
