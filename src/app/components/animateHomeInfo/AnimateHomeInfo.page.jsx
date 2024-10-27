"use client";
import Home_image4 from "../../img/DSC03005.png";
import styles from "./animateHomeInfo.page.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";




const Animation = {
  hidden: {
    y: 200, // исправлено на 'y'
    opacity: 0, // исправлено на 'opacity'
  },
  visible: {
    y: 0,
    opacity: 1,
     transition: { duration: 0.5 }, // Пример задержек на основе пользовательских
  },
};


const ImageAnimation = {
  hidden: {
    opacity: 0,
    y: 50, // Небольшое смещение вниз при старте
  },
  visible: {
    opacity: 1,
    y: 0, // Изображение возвращается в исходное положение
    transition: {
      duration: 0.5, // Продолжительность анимации
      ease: "easeInOut",
    },
  },
};

export default function MyComponent() {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{amount:0.2 }} 
    >
      {/* <motion.h1
         variants={Animation}
        className={styles.text2}
      >
        Это будет анимироваться при прокрутке!
      </motion.h1> */}

      {/* Анимация для изображения */}
      <motion.div variants={Animation} className={styles.image}  >  
      <motion.div
      
        // initial="hidden"
        // whileInView="visible"
        // viewport={{amount:0.2}}
        variants={ImageAnimation} // Применяем анимацию к обертке
      >
         <div className={styles.photo}>
        <Image
           className={styles.img}
          src={Home_image4}
          alt="home_photo"
          width={'auto'}
          height={'auto'}
         
        />
        </div>
        
      </motion.div>
      </motion.div>
        <div className={styles.text}>
        
           <motion.span variants={Animation} >Твiй</motion.span>
           <span >Iдеальный</span>
           <span >сайт!</span>
         </div> 
    </motion.section>
  );
}




//  export default function MyComponent() {
 

//  return(

    
//      <motion.section  className={styles.container}
//       initial='hidden'
//       whileinView='visible'
//        // viewport={{amount:0.2}}
//       >
  
  
      
//    <motion.h1  variants={Animation} className={styles.text2}
  
  
  
//    >
//    This will animate on scroll!
//  </motion.h1>
    
//           {/* <motion.div  className={styles.image}  >  */}
      
       
//           {/* <Image
//           className=''
//           // 
//             src={Home_image4}             //   priority={true}
//             alt="home_photo"
//             width={80}
//             height={80}
            
//              //  
//           /> */}
//          {/* </motion.div> */}
//         {/* <div className={styles.text}>
        
// //           <span >Bounce-in</span>
// //           <span >CSS</span>
// //           <span >Animation</span>
// //         </div> */}
     
//     </motion.section>
//    );
//  }




// export default function MyComponent() {
//   return (
//     <motion.section
//       className={styles.container}
//       initial="hidden"
//       whileInView="visible"
//       // viewport={{ amount: 0.2 }}
//     >
//       <motion.h1 variants={Animation} className={styles.text2}>
//         Это будет анимироваться при прокрутке!
//       </motion.h1>
//     </motion.section>
//   );
// }


