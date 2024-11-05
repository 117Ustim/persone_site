"use client";
import Image from "next/image";
import styles from "./header.page.module.scss";
import Home_image4 from "../img/IMG_8597.png";
import globe from "../img/804.gif";
import { motion } from "framer-motion";
import Navig from "../navig/navig.page";
import Globe from "../components/globe/Globe.page";

export default function Main() {
  return (
    <>
      <div className={styles.header}>
        <Globe />
        <div className={styles.navig}>
          <Navig />
        </div>

        <div className={styles.header_photo}>
          <Image
            src={Home_image4}
            priority={true}
            alt="home_photo"
            width={800}
            height={800}
            unoptimized
          />
        </div>

        <div className={styles.block_text}>
          <div className={styles.text}>
            <span className={styles.text_item}>Веброзробник&</span>
            <span className={`${styles.text_item} ${styles.text2}`}>
              Дизайнер
            </span>
          </div>
        </div>

        {/* animate={{rotate:360}}
      transition={{duration:2}} */}

        <div className={styles.title_block}>
          <div className={styles.title}>Антоненко Устим</div>
        </div>
        <div className={styles.block_globe_360}>
          <div className={styles.rectangle_location_360}></div>
          <div className={styles.transparent_circle_360}></div>
          <div className={styles.globe}>
            <Image
              src={globe}
              alt="home_photo"
              width={50}
              height={50}
              unoptimized
            />
          </div>

          <div className={styles.ua_360}>UA</div>
        </div>
      </div>
    </>
  );
}
