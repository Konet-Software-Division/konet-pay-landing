import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column_wrapper}>
        <div className={styles.column}>
          <h3>About</h3>
          <div className={styles.links_wrapper}>
            <Link href="/">About Us</Link>
            <Link href="/">Why Choose Us</Link>
            <Link href="/">Careers</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Products</h3>
          <div className={styles.links_wrapper}>
            <Link href="/">Debit Cards</Link>
            <Link href="/"> Ecommerce</Link>
            <Link href="/">Online Gaming</Link>
            <Link href="/">Payment Gateway</Link>
            <Link href="/">Point of Sale (POS)</Link>
            <Link href="/">Wallet</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Legal</h3>
          <div className={styles.links_wrapper}>
            <Link href="/">Terms & Condition</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Support</h3>
          <div className={styles.links_wrapper} style={{ marginBottom: 20 }}>
            <Link href="/">Customer Service</Link>
            <Link href="/"> Contact Us</Link>
          </div>
          <h3>Developers</h3>
          <div className={styles.links_wrapper}>
            <Link href="/">Documentation</Link>
            <Link href="/">Integration</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <div className={styles.links_wrapper}>
            <p>
              5 Jeremiah Ugwu Street,
              <br /> Lekki Phase 1, Lagos
            </p>
          </div>
        </div>
      </div>
      <div className={styles.copyright_text}>
        <p>KonetPay ©2021 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
