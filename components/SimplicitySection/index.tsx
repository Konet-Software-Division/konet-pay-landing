import Image from "next/dist/client/image";
import Slider from "../Slider/Slider";
import styles from "./section.module.scss";

const SimplicitySection = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>Your Door to Simplicty</h2>
          <p>Secure and Easy to use Payment Channels</p>
        </div>
        <div className={styles.content}>
          <div className={styles.left_side}>
            <Image
              src="/images/simplicity-image.svg"
              width={400}
              height={420}
              alt=""
            />{" "}
          </div>

          <div className={styles.right_side}>
            <h2>Payment made Easier and Safer</h2>
            <p>
              Konetpay brings user friendly payments functionality services.
              <br />
              <br />
              Opening more opportunities for financial inclusion, customization
              of payments functionality services and offering customers many
              different ways to pay and receive money in Nigeria with global
              networks.
            </p>
            <div className={styles.list}>
              <div className={styles.list_items}>
                <p>
                  <Image src="/icons/cards.svg" alt="" width={20} height={20} />
                  Debit Cards
                </p>
                <p>
                  <Image src="/icons/bag-2.svg" alt="" width={20} height={20} />
                  Ecommerce
                </p>
                <p>
                  <Image src="/icons/game.svg" alt="" width={20} height={20} />
                  Online Gaming
                </p>
              </div>
              <div className={styles.list_items}>
                <p>
                  <Image
                    src="/icons/money-4.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Payment Gateway
                </p>
                <p>
                  <Image
                    src="/icons/card-pos.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Point of Sale (POS)
                </p>
                <p>
                  <Image
                    src="/icons/wallet-3.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Wallet
                </p>
              </div>
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className={styles.section_two}>
        <div className={styles.container}>
          <div className={styles.left_section}>
            <div className={styles.icon_details_row}>
              <div className={styles.content_box}>
                <Image
                  src="/icons/convenience.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <h2>Convenience</h2>
                <p>
                  Accept both local and <br /> international cards
                </p>
              </div>
              <div className={styles.content_box}>
                <Image
                  src="/icons/efficiency.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <h2>Efficiency</h2>
                <p>
                  Our devices are very easy to <br /> use and full featured to
                  also <br /> provide value added services
                </p>
              </div>
            </div>
            <div className={styles.icon_details_row}>
              <div className={styles.content_box}>
                <Image src="/icons/pci-dss.svg" width={50} height={50} alt="" />
                <h2>PCI DSS Certified</h2>
                <p>
                  We offer highest security <br /> standards to ensure safety of{" "}
                  <br /> your money
                </p>
              </div>
              <div className={styles.content_box}>
                <Image
                  src="/icons/efficiency.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <h2>Efficiency</h2>
                <p>
                  Our devices are very easy to <br /> use and full featured to
                  also <br /> provide value added services
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right_section}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimplicitySection;
