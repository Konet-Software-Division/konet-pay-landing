import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Slider.module.scss";

const Slider = () => {
  const hero1 = "/images/slider-1.svg";
  const hero2 = "/images/slider-2.svg";
  const heroImages = [hero1, hero2];
  const delay = 1500;

  const [index, setIndex] = useState(0);
  const timeoutRef: any = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  }, [heroImages.length]);
  return (
    <>
      <div className={styles.slideshow}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {heroImages.map((heroImage, index) => (
            <Image
              className={styles.slide}
              key={index}
              src={heroImage}
              alt="hero"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
