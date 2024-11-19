import Image from 'next/image';
import Burger from './burger/Burger';
import styles from'./navig.page.module.scss'

import Link from 'next/link';

export default function Navig ({ textColor,logo  }) {
 
return (
    <div className={styles.navig} >
    {/* <div className={styles.code}>
    <p>© Code by Ustim</p>
    </div> */}
     <div className={styles.logo}>
        <p className={styles.logo_name} style={{ color: textColor }}>Antonenko Ustim</p>
        {/* <Link href="/"> */}
              <Image
                src={logo}
                alt="logo"
                width={90}
                height={45}
                style={{ cursor: "pointer" }}
              />
               {/* </Link> */}
            </div>
    <nav className={styles.menu_360}>
       
     <div className={styles.point}></div> 
       <Burger textColor = {textColor}/>
    
    </nav>
  
    
    <nav className={styles.menu_550} >
    {/* <div className={styles.point}></div> */}
    <ul >
    <li >
        <Link href="/" style={{ color: textColor }}>Головна</Link>
        </li>
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