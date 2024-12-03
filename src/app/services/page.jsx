import Image from "next/image";
import Navig from "../navig/navig.page";
import styles from "./services.module.scss";
import globe from "../img/804.gif";
import services_photo from "../img/photo_services.png";
import logo from "../img/logo_000.png";
import SectionServices_2 from "./section_services_2/SectionServices_2.page";
import SectionServices_3 from "./section_services_3/SectionServices_3";
import Footer from "../footer/footer.page";






export default function Services() {
  return (
    <div className="services">
      <Navig
        textColor="#000000"
        style={{ textDecoration: "none" }}
        logo={logo}
      />

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
                Я помогаю компаниям со всего мира, предлагая индивидуальные
                решения. С каждым проектом я поднимаю свою работу на новые
                горизонты, всегда ставя качество на первое место.
              </p>
            </h3>

            <Image
              src={services_photo}
              alt="services_photo"
              width={800}
              height={1000}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
     
   <SectionServices_2/>
    <SectionServices_3/>
     <Footer/> 
    </div>
  );
}
