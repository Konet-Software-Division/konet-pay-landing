import Image from "next/dist/client/image";

import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <h2>Get seamless payment experience</h2>
        <p>Konetpay brings user friendly payments functionality services.</p>
        <button>
          <a href="https://konetpay.netlify.app/">Get Started</a>
        </button>
      </div>
      <div className={styles.right_side}>
        <div className={styles.top_images}>
          <Image src="/images/hero-man.png" alt="" width={200} height={250} />
          <Image
            src="/images/hero-woman-1.png"
            alt=""
            width={200}
            height={250}
          />
        </div>
        <img src="/images/hero-woman-2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
