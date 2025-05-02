'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./animate_title.module.scss"; 
import AnimateOnView from '../../ScrollAnimation'



export default function AnimateTitle() {
  const [showEnglish, setShowEnglish] = useState(true);

  // Переключение между языками через 3 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnglish(false);
    }, 1250);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, []);

const titleVariants = {
    hidden: { opacity: 0, y: "-90%"  },
    visible: {
       opacity: 1, y: 0 ,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      
      },
    },
  };


  return (
    <AnimateOnView variants={titleVariants} >
    <div className={styles.title}>
      
        <div className={styles.title_ukrainian}>
          <h1>
            Допоможу Вам виділятися у цифрову епоху, створюючи унікальні рішення
            для Вашого успіху. Мій підхід — без зайвих слів, лише дієві кроки та
            інновації. Я завжди на крок попереду, залишаючись на передовій
            сучасного веб-дизайну та розробки.
          </h1>
        </div>
      
    </div>
    </AnimateOnView>
  );
}



















  // return (
  //   <div className={styles.title}>
  //     <AnimatePresence mode="wait">
  //       {showEnglish ? (
  //         <motion.div
  //           key="english"
  //           className={styles.title_english}
  //           initial={{ opacity: 1  }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0  }}
  //           transition={{ duration: 1 }}
  //         >
  //           I will help you stand out in the digital age by creating unique
  //           solutions for your success. My approach is no-nonsense, just
  //           actionable steps and innovation. I'm always one step ahead, staying
  //           on the cutting edge of modern web design and development.
  //         </motion.div>
  //       ) : (
  //         <motion.div
  //           key="ukrainian"
  //           className={styles.title_ukrainian}
  //           initial={{ opacity: 0, x: "-100%" }} // Начальная позиция за пределами экрана
  //           animate={{ opacity: 1, x: 0 }} // Плавное появление и выезд слева
  //           transition={{
  //             duration: 1.5, // Длительность анимации
  //             ease: "easeOut",
  //           }}
  //         >
  //           <h1>
  //             Допоможу Вам виділятися у цифрову епоху, створюючи унікальні
  //             рішення для Вашого успіху. Мій підхід — без зайвих слів, лише
  //             дієві кроки та інновації. Я завжди на крок попереду, залишаючись
  //             на передовій сучасного веб-дизайну та розробки.
  //           </h1>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   </div>
  // );
// }