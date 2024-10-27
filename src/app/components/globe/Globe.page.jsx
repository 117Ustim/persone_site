import Image from 'next/image';
import styles from'./globe.page.module.scss'
import globe from '../../img/804.gif'

export default function Globe () {
return (
    <div className={styles.block_location_650}>
    <div className={styles.ukraine_650}>Located in Ukraine</div>
    <div className={styles.rectangle_location_650}></div>
    <div className={styles.transparent_circle_650}></div>
    <div className={styles.globe_650}>
<Image
            src={globe}
            alt="home_photo"
            width={50}
            height={50}
            unoptimized
          />
     </div>
  </div>
);
}