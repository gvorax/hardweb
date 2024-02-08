// components/Navbar.js

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Btn from "../assets/brn.png";

import logo from "../assets/logo.png";

import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container flex-between">
        <Link href="/" className={`${styles.logo} flex-center`}>
          <Image src={logo} width={60} height={60} alt="ada" />
          Hard Web
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
        <div className={styles.drawer}>
          <Image src={Btn} width={46} height={46} onClick={showDrawer} alt="BTN"/>
        </div>
      </div>
        <div className={`${styles.sidebar}  ${open?styles.sidebarActive:''}`}>
          <div className={styles.exit} onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className={styles.links1}>
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
          <div className={styles.btn1}>
            <Link href="tel:+998993185735">Bog'lanish</Link>
          </div>
        </div>
    </nav>
  );
}
