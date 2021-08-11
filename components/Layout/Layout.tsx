import React from "react";
import Navbar from "../Navbar/Navbar";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";

import styles from "./layout.module.scss";

const Layout = ({ children, margin }: any) => {
  const [navbar, setNavbar] = React.useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (process.browser) {
    window.addEventListener("scroll", changeNavBackground);
  }
  return (
    <>
      <div className={`${styles.nav_wrapper} ${navbar ? styles.active : ""}`}>
        <Navbar />
      </div>

      <div className={margin ? styles.body : ""}>{children}</div>

      <CallToAction />
      <Footer />
    </>
  );
};

export default Layout;
