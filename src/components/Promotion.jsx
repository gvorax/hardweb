import React from "react";
import styles from "@/styles/Promotion.module.scss";
import Image from "next/image";

export default function Promotion() {
  return (
    <div>
      <div className={styles.promotion}>
        <div className={styles.promotion_bg_video}>
          <video
            src={require("@/assets/12201.mp4")}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={styles.promotion_content}>
          <h1 className={styles.promotion_title}>
            Mijozlarimiz biz haqimizda nima deyishadi
          </h1>
          <p className={styles.promotion_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="container">
        <div className={styles.promotion_text}>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={require("@/assets/icon (3).png")} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={require("@/assets/icon (3).png")} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={require("@/assets/icon (3).png")} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
          <div className={styles.text_border}>
            <div className={styles.promotion_text_item}>
              <div className={styles.item_box}>
                <Image src={require("@/assets/icon (3).png")} alt="img" />
                <span>Mahorat</span>
              </div>
              <p>
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
