'use client'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {motion, useAnimation } from 'framer-motion';


// Компонент-обертка для анимации при попадании в область видимости
const AnimateOnView = ({ children, variants, threshold = 0.2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
      {children}
    </motion.div>
  );
};

 export default AnimateOnView;

