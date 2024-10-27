import MyComponent from "../components/animateHomeInfo/AnimateHomeInfo.page";
import styles from "./sectionHomeInfo.page.module.scss";

export default function SectionHomeInfo() {
  return (
    <div className={styles.main}>
       <div className={styles.animate}>
       <MyComponent/>
      </div>
     
      <div className={styles.main_container}>
        
        <div className={styles.title}>
          <h1>
          Допоможу Вам виділятися у цифрову епоху, створюючи унікальні рішення для Вашого успіху. Мій підхід — без зайвих слів, лише дієві кроки та інновації. Я завжди на крок попереду, залишаючись на передовій сучасного веб-дизайну та розробки.
          </h1>
        </div>
        <div className={styles.text_block}>

        <div className={styles.text}>
          <h3>
          Поєднання моєї пристрасті до дизайну, коду та взаємодії ставить мене в унікальне положення у світі веб-дизайну.
          </h3>
          </div>
          <div className={styles.about_block}>
          <div className={styles.about_my}>
            <span>About my</span>
            

            </div> 
            </div> 
        </div>
      </div>
    </div>
  );
}
