import Image from 'next/image';
import Navig from '../navig/navig.page';
import styles from'./services.module.scss';
import globe from '../img/804.gif'
import services_photo from '../img/photo_services.png'

export default function Services () {

 


return (
 <div className='services'>
    
         <div className={styles.navigation}>
           <Navig textColor="#000000"style={{ textDecoration: 'none' }} />   
        </div>
         <div className={styles.container_services}>
             <div className={styles.title_block}>
            <div className={styles.title}>
      <h2>
      <span>Веду вас до успіху </span>
        <span>у світі цифрових технологій</span>
        </h2>
        </div> 
         <div className={styles.line}>
         <div className={styles.circle}>
         <Image
            src={globe}
            alt="globe"
            width={50}
            height={50}
            unoptimized
          />
        </div>
        </div>

         
            </div>
             <div className={styles.text_block}>
            <div className={styles.text}>
        <h3>
            <p>
            Я помогаю компаниям со всего мира, предлагая индивидуальные решения. С каждым проектом я поднимаю свою работу на новые горизонты, всегда ставя качество на первое место.
            </p>
        </h3>

        <Image
            src={services_photo}
            alt="services_photo"
            width={600}
            height={800}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
            </div>
        
        </div>
      {/* <div className={styles.background_comp_1}>   

    </div> */}

</div>
);
}