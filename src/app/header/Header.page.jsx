"use client";

import Image from "next/image";
import styles from "./header.page.module.scss";
import Home_image4 from "../img/IMG_8597.png";
import globe from "../img/804.gif";

import Navig from "../navig/Navig.page";
import Globe from "../components/globe/Globe.page";
import logo from "../img/logo.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AnimateOnView from '../ScrollAnimation'




export default function Main() {
  //  const controls = useAnimation();
  // const [ref, inView] = useInView({ threshold: 0.2 });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden"); // Возвращаем в начальное состояние, когда уходим из области видимости
  //   }
  // }, [controls, inView]);




  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2, 
        ease: "easeInOut",
      },
    },
  };

  const globeVariants = {
    hidden: { x: "120%" },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1,
      },
    },
  };

  // const titleVariants = {
  //   hidden: { x: "150%" },
  //   visible: {
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //       delay: 1,
  //     },
  //   },
  // };
  

  const titleVariants = {
    hidden: {
      x: "100%", // Текст начинается за пределами справа
      opacity: 0, // Невидимый текст
    },
    visible: {
      x: 0, // Исходное положение
      opacity: 1, // Полностью видимый
      transition: {
        x: {
          duration: 2, // Длительность перемещения
          ease: "easeOut", // Плавность
        },
        opacity: {
          duration: 1, // Текст появляется быстрее
          ease: "easeIn", // Плавное появление
        },
        delay: 2, // Задержка перед началом анимации
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
        <AnimateOnView variants={imageVariants}>
          {/* <motion.div */}
            {/* ref={ref}
            animate={controls}
            initial="hidden"
            variants={imageVariants} */}
          {/* > */}
            <Image
              src={Home_image4}
              priority={true}
              alt="home_photo"
              width={800}
              height={800}
              unoptimized
            />
          {/* </motion.div> */}
          </AnimateOnView>
        </div>

        <div className={styles.block_text}>
        <AnimateOnView variants={titleVariants}>

          {/* <motion.div
             animate={controls}
            initial="hidden"
            variants={globeVariants}
          > */}
            <div className={styles.text}>
              <span className={styles.text_item}>Веброзробник&</span>
              <span className={`${styles.text_item} ${styles.text2}`}>
                Дизайнер
              </span>
            </div>
          {/* </motion.div> */}
          </AnimateOnView>
        </div>
      
        <div className={styles.title_block}>
     <AnimateOnView variants={imageVariants}>
          <div className={styles.title}>Антоненко Устим</div>
       </AnimateOnView>
        </div>

   

        <motion.div
          className={styles.block_globe_360}
          // initial="hidden"
          //   animate={controls}
          // variants={globeVariants}
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
