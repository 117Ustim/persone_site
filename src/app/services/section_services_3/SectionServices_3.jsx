import Image from "next/image";
import styles from "./section_services_3.module.scss";
import {sectionServices_3} from '../../data';
import ServicesWordAnimation from "@/app/components/servicesWordAnimation/ServicesWordAnimation";

export default function SectionServices_3() {
  return (
    <div className={styles.section_services_3}>
<div className={styles.block_section}>

       <div className={styles.block_circle_title}>
      <div className={styles.letters_circle}>
        <ServicesWordAnimation/>
      </div>
      <div className={styles.title}>
            <h3>{sectionServices_3[0].title}</h3>
          </div>


          
      </div>



      
     
        
          
          <div className={styles.text}>
            <p>
            {sectionServices_3[0].text}
            </p>
          </div>
        </div>
         <div className={styles.photo}>
         <Image
                src= {sectionServices_3[0].img}
                alt={sectionServices_3[0].alt}
                width={900}
                height={600}
             
              />
        </div>
     
    </div>
  );
}
