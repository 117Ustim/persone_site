import Image from 'next/image';
import styles from'./services_word_animation.module.scss';
 import logo from '../../img/logo_000_l.png'

export default function ServicesWordAnimation () {
   
return (
    <>
     <div className={styles.logo}>
    <p>Antonenko Ustim</p>
  
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={35}
            style={{ cursor: "pointer" }}
          />
        
        </div>
    <div className={styles.container}>
    <span className={styles.letter}>М</span>
    <span className={styles.letter}>ы</span>
    <span className={styles.letter}> </span>
 
    <span className={styles.letter}>с</span>
    <span className={styles.letter}>д</span>
    <span className={styles.letter}>е</span>
    <span className={styles.letter}>л</span>
    <span className={styles.letter}>а</span>
    <span className={styles.letter}>е</span>
    <span className={styles.letter}>м</span>
    <span className={styles.letter}> </span>
    <span className={styles.letter}>л</span>
    <span className={styles.letter}>у</span>
    <span className={styles.letter}>ч</span>
    <span className={styles.letter}>ш</span>
    <span className={styles.letter}>и</span>
    <span className={styles.letter}>й</span>
    <span className={styles.letter}> </span>
    <span className={styles.letter}>с</span>
    <span className={styles.letter}>а</span>
    <span className={styles.letter}>й</span>
    <span className={styles.letter}>т</span>
    <span className={styles.letter}> </span>
  </div>
    
    </>
   
);
}