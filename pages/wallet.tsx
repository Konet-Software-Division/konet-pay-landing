import Image from "next/dist/client/image";

import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";

import styles from "../styles/Wallet.module.scss";

const Wallet = () => {
  const content = [
    {
      id: 1,
      title: "Install The App",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/install.svg",
    },
    {
      id: 2,
      title: "Setup your account",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/user.svg",
    },
    {
      id: 3,
      title: "Upgrade your account",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/status-up.svg",
    },
    {
      id: 4,
      title: "Enjoy the features",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/like-tag.svg",
    },
  ];

  const featuresContent = [
    {
      id: 1,
      title: "Security",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/install.svg",
    },
    {
      id: 2,
      title: "Enjoy the features",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/user.svg",
    },
    {
      id: 3,
      title: "Enjoy the features",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/status-up.svg",
    },
    {
      id: 4,
      title: "Enjoy the features",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/like-tag.svg",
    },
    {
      id: 5,
      title: "Enjoy the features",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/like-tag.svg",
    },
    {
      id: 6,
      title: "Enjoy the features",
      subTitle:
        ' On your phone tap Google Play Store on Android devices or App Store and search for "KonetPay" the DOWNLOAD',
      icon: "/icons/like-tag.svg",
    },
  ];
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
        <div className={styles.section_two}>
          <h3 className={styles.heading}>How App Works</h3>
          <div className={styles.section_body}>
            <Slider />
            <div className={styles.right_side}>
              {content.map((el) => (
                <div className={styles.text_box} key={el.id}>
                  <div className={styles.icon_wrapper}>
                    <Image src={el.icon} alt="" width={30} height={40} />
                  </div>

                  <div className={styles.text}>
                    <h2>{el.title}</h2>
                    <p>{el.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.section_three}>
          <div className={styles.section_body}>
            <h2>Amazing features of the KonetPay App</h2>
            <div className={styles.body_content_row}>
              {featuresContent.map((el) => (
                <div className={styles.content_box}>
                  <div className={styles.icon_wrapper}>
                    <Image src={el.icon} alt="" width={30} height={40} />;
                  </div>
                  <h3>{el.title}</h3>
                  <p>{el.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Wallet;
