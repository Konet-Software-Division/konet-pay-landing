import { useRouter } from "next/dist/client/router";
import Image from "next/image";

import styles from "../styles/404.module.scss";
import Navbar from "../components/Navbar/Navbar";

const Error404 = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Image src="/images/404.svg" width={600} height={350} alt="" />
        <div className={styles.text}>
          <p className={styles.light_text}>Oops..</p>
          <p className={styles.bold_text}>We don't have this page</p>
        </div>
        <button onClick={() => router.push("/")}>Return to Homepage</button>
      </div>
    </div>
  );
};

export default Error404;
