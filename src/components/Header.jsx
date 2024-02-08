import React from "react";
import styles from "../styles/Header.module.scss";
import Navbar from "./Navbar";
import video from '../assets/video.mp4';
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.bg_video}>
        <video
          className={styles.bg_video_content}
          src={video}
          loop
          autoPlay
          muted
        ></video>
      </div>
      <Navbar />
      <div className={styles.main_content}>
        <h1>Biznesingiz uchun IT xizmatlar!</h1>
        <div className={styles.main_button}>
          <a href="#">Web Sayt</a>
          <a href="#">Ilovalar</a>
          <a href="#">Telegram Bot</a>
          <p href="#">va</p>
          <a href="#">Web Dizayn</a>
        </div>
        <div className={styles.main_buttons}>
          <a href="#">Bizning ishlar</a>
          <a href="#">Bog'lanish</a>
        </div>
      </div>
    </div>
  );
}
