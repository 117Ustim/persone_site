'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './loading.page.module.scss';

export default function Loader({ children }) {

    const [loading, setLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);


    useEffect(() => {
      const enterTimer = setTimeout(() => {
        setIsExiting(true);
        const exitTimer = setTimeout(() => {
          setLoading(false);
        }, 1000); // Задержка для завершения анимации сворачивания
  
        // Очищаем exitTimer при размонтировании
        return () => clearTimeout(exitTimer);
      }, 4000);
  
      // Очищаем enterTimer при размонтировании
      return () => clearTimeout(enterTimer);
    }, []);


    const exitAnimation = {
      scale: [1, 2], // Увеличение при рассеивании
      borderRadius: ['0%', '50%'], // Превращение в круг
      opacity: [1, 0], // Исчезновение
      transition: {
        duration: 1, // Продолжительность анимации
        ease: 'easeInOut',
      },
    };
  
    if (loading) {
      return (
        <motion.div
        className={styles.loader}
        animate={isExiting ? exitAnimation : {}} // Применяем анимацию выхода
      >
        <div className={styles.loader}>
       <div className={styles.container}>
      
    
          <span>З</span>
          <span>і</span>                  
          <span>М</span>         
          <span>н</span>
          <span>о</span>
          <span>ю</span>        
          <span>В</span>
          <span>а</span>         
          <span>ш</span>
          <span>і</span>
          <span>&nbsp;</span>
          <span>І</span>
          <span>д</span>         
          <span>е</span>
          <span>ї</span>
          <span>&nbsp;</span>
          <span>С</span>
          <span>т</span>
          <span>а</span>
          <span>н</span>
          <span>у</span>
          <span>т</span>
          <span>ь</span>
          <span>&nbsp;</span>
          <span>Р</span>
          <span>е</span>
          <span>а</span>
          <span>л</span>
          <span>ь</span>
          <span>н</span>
          <span>і</span>
          <span>с</span>
          <span>т</span>        
          <span>ю</span>
          </div>  
        </div>
        </motion.div>
      );
    }
  
    // Возвращаем дочерний контент (children), когда загрузка завершена
    return <>{children}</>;
  }