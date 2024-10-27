'use client'
import './anim_text.page.scss'




import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



export default function AnimText({ children }) {

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
      }, 11000);
  
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
         className='loader'
        animate={isExiting ? exitAnimation : {}} // Применяем анимацию выхода
      >
       <div className="sp-container">
	<div className="sp-content">
		<div className="sp-globe"></div>
		<h2 className="frame-1">Зі мною</h2>
		<h2 className="frame-2">Ваші ідеї</h2>
		<h2  className="frame-3">Стануть реальністю</h2>
		 {/* <h2  className="frame-4">TEST IT!</h2>  */}
		<h2  className="frame-5">
			<span>Давайте</span>
			<span>Почнемо</span>
			<span>Разом</span>
		</h2>
		{/* <a  className="sp-circle-link" href="https://nick.mkrtchyan.ga">wellcom</a> */}
	</div>
</div>
        </motion.div>
      );
    }
  
    // Возвращаем дочерний контент (children), когда загрузка завершена
    return <>{children}</>;
  }