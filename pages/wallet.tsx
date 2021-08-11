import Image from "next/dist/client/image";

import Layout from "../components/Layout/Layout";

import styles from "../styles/Wallet.module.scss";

const Wallet = () => {
  return (
    <>
      <Layout>
        <div className={styles.hero}>
          <div className={styles.left_side}>
            <h2>Send and receive payment easily</h2>
            <p>
              With your Konetpay App send and receive money in real time from
              any bank without Hassle!!
            </p>
            <div className={styles.button_group}>
              <Image
                src="/icons/google-play.svg"
                alt=""
                width={120}
                height={150}
              />
              <Image
                src="/icons/app-store.svg"
                alt=""
                width={120}
                height={150}
              />
            </div>
          </div>
          <div className={styles.right_side}>
            <div className={styles.image_wrapper}>
              <img src="/images/hero-mockup-1.svg" alt="" />
            </div>
            <div className={`${styles.image_wrapper} ${styles.second_image}`}>
              <img src="/images/hero-mockup-2.svg" alt="" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Wallet;
