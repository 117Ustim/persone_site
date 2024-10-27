import Image from "next/image";
import styles from "./footer.page.module.scss";
import Home_image4 from "../img/IMG_8585.png";
import arrow from "../img/arrow-removebg.png";
import logo_1 from "../img/14.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.block_title}>
          <div className={styles.block_title_photo}>
            <div className={styles.photo}>
              <Image
                src={Home_image4}
                alt="footer_photo"
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>
              <h2>Давайте </h2>
            </div>
          </div>

          <div className={styles.block_title_2_arrow}>
            <div className={styles.title_2}>
              <h2>працювати разом</h2>
            </div>
            <div className={styles.arrow}>
              <Image src={arrow} alt="arrow" width={25} height={10} />
            </div>
          </div>
          <div className={styles.block_line}>
            <div className={styles.line}></div>
            <div className={styles.circle}>
              <span>Зв'яжіться зi мною</span>
            </div>
          </div>

          <div className={styles.block_input}>
            <div className={styles.input_email}>
              <p>ustik72@gmail.com</p>
            </div>
            <div className={styles.input_phone}>
              <p>+380673276040</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block_socials}>
        <p>Соцiальнi мережi</p>
        <div className={styles.socials}>
          <ul>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className={styles.line}></div>

        <div className={styles.block_version}>
          <p>2024 Kiev,Ukraine</p>
          <div className={styles.footer_logo}>
            <div className={styles.logo_1}>
              <Image src={logo_1} alt="arrow" width={30} height={30} />

              <p className={styles.footer_logo_name}>ANTONENKO USTIM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
