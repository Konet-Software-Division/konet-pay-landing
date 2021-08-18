import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const dropdownDetails = [
    {
      id: 1,
      title: "PAYMENT GATEWAY",
      secondaryText: "Accept international and local payments",
      icon: (
        <Image src="/icons/payment-gateway.svg" width={50} height={50} alt="" />
      ),
      link: "/payment",
    },
    {
      id: 2,
      title: "E-COMMERCE",
      secondaryText: "Marketplace for grocery home appliances, fashion etc.",
      icon: <Image src="/icons/ecommerce.svg" width={65} height={65} alt="" />,
      link: "/e-commerce",
    },
    {
      id: 3,
      title: "POINT OF SALE (POS)",
      secondaryText:
        "Delight your customers  with a seamless payment experience.",
      icon: <Image src="/icons/pos-icon.svg" width={70} height={70} alt="" />,
      link: "/POS",
    },
    {
      id: 4,
      title: "DIGITAL WALLET",
      secondaryText: "Send and recieve money seamlessly",
      icon: <Image src="/icons/wallet.svg" width={50} height={50} alt="" />,
      link: "/wallet",
    },
  ];
  return (
    <header className={styles.header}>
      <nav className={styles.wrapper}>
        <div>
          <Image
            src="/images/logo.svg"
            alt="konet pay logo"
            width={200}
            height={62}
          />
        </div>
        <ul>
          <li className={styles.menu}>
            <div className={styles.product_group}>
              <Link href="/">Our Products</Link>
              <img
                src="/icons/dropdown.svg"
                width={10}
                height={10}
                alt=""
                className={styles.dropdown_icon}
              />
            </div>

            <div className={`${styles.dropdown_menu} ${styles.dropdown_flip}`}>
              {dropdownDetails.map((item) => (
                <div className={styles.dropdown_items}>
                  {item.icon}
                  <div className={styles.dropdown_text}>
                    <Link href={item.link}>{item.title}</Link>

                    <p style={{ fontSize: 12 }}>{item.secondaryText}</p>
                  </div>
                </div>
              ))}
            </div>
          </li>
          <li className={styles.menu}>
            <Link href="/">FAQ</Link>
          </li>
          <li className={styles.menu}>
            <Link href="/">Pricing</Link>
          </li>
        </ul>

        <div className={styles.menu_actions}>
          <p>
            <Link href="/">Sign in</Link>
          </p>
          <button>Get Started</button>
        </div>

        <div className={styles.burger}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
