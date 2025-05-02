'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from'./animate_text.module.scss';


export default function AnimateText () {
    const [showEnglish, setShowEnglish] = useState(true);

    // Переключение между языками через 3 секунды
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowEnglish(false);
      }, 1250);
  
      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }, []);
  
    return (
      <div className={styles.text}>
        <AnimatePresence mode="wait">
          {showEnglish ? (
            <motion.div
              key="english"
              className={styles.text_english}
              initial={{ opacity: 1  }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0  }}
              transition={{ duration: 1 }}
            >
             Combining my passion for design, code, and interaction puts me in a unique position in the world of web design.
            </motion.div>
          ) : (
            <motion.div
              key="ukrainian"
              className={styles.text_ukrainian}
              initial={{ opacity: 0, x: "100%" }} // Начальная позиция за пределами экрана
              animate={{ opacity: 1, x: 0 }} // Плавное появление и выезд слева
              transition={{
                duration: 1.5, // Длительность анимации
                ease: "easeOut",
              }}
            >
              <h1>
              Поєднання моєї пристрасті до дизайну, коду та взаємодії ставить мене в унікальне положення у світі веб-дизайну.
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
}