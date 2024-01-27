// components/Navbar.js

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/logo.png";

import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <nav className={styles.navbar}>
      <div className="container flex-between">
        <Link href="/" className={`${styles.logo} flex-center`}>
          <Image src={logo} width={60} height={60} alt="ada" /> Hard Web
        </Link>
        <div className={styles.links}>
          <Link
            href="/home"
            className={activeItem === "home" ? "active" : ""}
            onClick={() => handleItemClick("home")}
          >
            Home
          </Link>
          <Link
            href="/service"
            className={activeItem === "service" ? "active" : ""}
            onClick={() => handleItemClick("service")}
          >
            Xizmatlar
          </Link>
          <Link
            href="/work"
            className={activeItem === "work" ? "active" : ""}
            onClick={() => handleItemClick("work")}
          >
            Ishlar
          </Link>
          <Link
            href="/process"
            className={activeItem === "process" ? "active" : ""}
            onClick={() => handleItemClick("process")}
          >
            Jarayon
          </Link>
          <Link
            href="/about"
            className={activeItem === "about" ? "active" : ""}
            onClick={() => handleItemClick("about")}
          >
            Biz haqimizda
          </Link>
        </div>
        <div className={styles.btn}>
          <Link href="tel:+998993185735">Bog'lanish</Link>
        </div>
      </div>
    </nav>
  );
}
