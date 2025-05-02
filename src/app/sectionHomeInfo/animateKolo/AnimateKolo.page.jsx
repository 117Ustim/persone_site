"use client";
import Home_image4 from "../../img/DSC03005.png";
import styles from "./animateKolo.module.scss";
import Image from "next/image";

import { useState,useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function AnimateKolo() {


  // const controls = useAnimation();
  // const [ref, inView] = useInView({ threshold: 0.2 });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden"); 
  //   }
  // }, [controls, inView]);



  // const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <section className={styles.container}>
      <motion.div
     
        className={styles.image}
       
      >
        <div>
          <motion.div className={styles.photo}
           
            // initial={{ scale: 1, y: 0, opacity: 1 }} // Начальная прозрачность 1
            //  animate={{ scale: 0.13, y: -400, x: -100, opacity: [1, 0, 1] }} // Конечная прозрачность 0 (исчезает)
            // transition={{ duration: 1, delay: 1.5 ,times: [0, 0.95, 1],}}
            // onAnimationComplete={() => setIsAnimationComplete(true)} // Сработает по завершению анимации
            // style={{ overflow: isAnimationComplete ? 'hidden' : 'visible' }} // Применяет overflow: hidden, когда анимация завершена
           
          
          
          >
            <Image
              className={styles.img}
              src={Home_image4}
              alt="home_photo"
              width={"auto"}
              height={"auto"}
            />
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.text}>
        <span>Твiй</span>
        <span>Iдеальный</span>
        <span>сайт!</span>
      </div>
    </section>
  );
}
