import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import styles from "../styles/Home.module.scss";
import SimplicitySection from "../components/SimplicitySection";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Head>
            <title>KonetPay - Home</title>
            <meta name="home" content="Home" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Hero />
        </div>
      </div>
      <SimplicitySection />
      <CallToAction />
      <Footer />
    </>
  );
}
