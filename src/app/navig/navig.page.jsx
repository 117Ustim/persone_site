import Image from 'next/image';
import Burger from './burger/Burger';
import styles from'./navig.page.module.scss'
import logo from "../img/logo.png";
import Link from 'next/link';

export default function Navig () {
return (
    <div className={styles.navig}>
    {/* <div className={styles.code}>
    <p>© Code by Ustim</p>
    </div> */}
     <div className={styles.logo}>
        <p className={styles.logo_name}>Antonenko Ustim</p>
              <Image
                src={logo}
                alt="footer_photo"
                width={90}
                height={45}
              />
            </div>
    <nav className={styles.menu_360}>
       
     <div className={styles.point}></div> 
       <Burger/>
    
    </nav>
    {/*
    <ul>
      
        <li> </li>
    </ul> */}
    
    <nav className={styles.menu_550}>
    <div className={styles.point}></div>
    <ul>
      
        <li>
        <Link href="/portfolio">Портфолiо</Link>
        </li>
        <li>Послуги</li>
        <li>Контакти</li>
    </ul>
    </nav>
    </div>
);
}