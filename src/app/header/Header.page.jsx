"use client";

import Image from "next/image";
import styles from "./header.page.module.scss";
import Home_image4 from "../img/IMG_8597.png";
import globe from "../img/804.gif";
import { motion } from "framer-motion";
import Navig from "../navig/Navig.page";
import Globe from "../components/globe/Globe.page";
import logo from "../img/logo.png";



export default function Main() {




  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2, // Длительность анимации в секундах
        ease: "easeInOut",
      },
    },
  };

  const slideInVariants = {
    hidden: { x: '120%' }, 
    visible: {
      x: 0, 
      transition: {
        duration: 1, 
        ease: "easeOut", 
        delay: 1,
      },
    },
  };
  return (
    <>
      <div className={styles.header}>
        <Globe />
        <div className={styles.navig}>
          <Navig
            textColor="#ffffff"
            style={{ textDecoration: "none" }}
            logo={logo}
          />
        </div>

        <div className={styles.header_photo}>
        <motion.div
      
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
          <Image
            src={Home_image4}
            priority={true}
            alt="home_photo"
            width={800}
            height={800}
            unoptimized
          />
           </motion.div>
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
        <motion.div
          className={styles.block_globe_360}
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
        >
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
          </motion.div>
      </div>
    </>
  );
}
