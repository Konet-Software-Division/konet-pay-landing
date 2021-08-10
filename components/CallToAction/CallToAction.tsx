import styles from "./cta.module.scss";

const CallToAction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <h1>Get KonetPay Account</h1>
        <p>
          With your Konetpay account you can send and receive <br />
          money in real time from any bank without Hassle!!
        </p>
      </div>
      <div className={styles.right_side}>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default CallToAction;
