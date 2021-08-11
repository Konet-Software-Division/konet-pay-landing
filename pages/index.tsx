import React from "react";

import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import styles from "../styles/Home.module.scss";
import SimplicitySection from "../components/SimplicitySection";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Home() {
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
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Head>
            <title>KonetPay - Home</title>
            <meta name="home" content="Home" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Hero />
        </div>
      </div>
      <SimplicitySection />
      <CallToAction />
      <Footer />
    </>
  );
}
