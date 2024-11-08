import Image from 'next/image';
import Burger from './burger/Burger';
import styles from'./navig.page.module.scss'
import logo from "../img/logo.png";
import Link from 'next/link';

export default function Navig ({ textColor = '#ffffff' }) {
return (
    <div className={styles.navig} >
    {/* <div className={styles.code}>
    <p>© Code by Ustim</p>
    </div> */}
     <div className={styles.logo}>
        <p className={styles.logo_name} style={{ color: textColor }}>Antonenko Ustim</p>
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
  
    
    <nav className={styles.menu_550} >
    {/* <div className={styles.point}></div> */}
    <ul >
      
        <li >
        <Link href="/portfolio" style={{ color: textColor }}>Портфолiо</Link>
        </li>
        <li>
        <Link href="/services" style={{ color: textColor }}>Послуги</Link>
        </li>
        <li>
        <Link href="/contact" style={{ color: textColor }}>Контакти</Link>
        </li>
    </ul>
    </nav>
    </div>
);
}