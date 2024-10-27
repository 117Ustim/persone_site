"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./slider_site.page.module.scss";
import { slides } from "../data";
import Image from "next/image";

const Slider_2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true); // Флаг для автопереключения
  const timeoutRef = useRef(null); // Для управления таймаутом

  // Автопереключение слайдов каждые 6 секунд
  useEffect(() => {
    if (isAutoSwitching) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoSwitching, slides.length]);

  // Активное состояние на основе прокрутки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Обработчик нажатий на кнопки
  const handleManualSwitch = (direction) => {
    // Останавливаем автопереключение
    setIsAutoSwitching(false);

    // Если таймаут уже установлен, сбрасываем его
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Ставим таймаут на возобновление автопереключения через 3 секунды
    timeoutRef.current = setTimeout(() => {
      setIsAutoSwitching(true);
    }, 3000);

    // Меняем слайды вручную
    if (direction === "prev") {
      setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    } else {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }
  };

  return (
    <div>
      <section id="roto" className={isActive ? "styles.active" : ""}>
        {/* <div id="rotoTransition" className={`${styles.carousel} ${styles.slide}`}> */}

        <div className={styles.carousel_inner}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.carousel_item} ${
                index === currentSlide ? styles.active : ""
              }`}
            >
              <div className={styles.slide}>
                <Image
                  src={slide.img}
                  alt={slide.alt}
                  className={styles.mainImage}
                  width={800}
                  height={1000}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                <div className={styles.roundOuter}>
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    width={800}
                    height={1000}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.roundInner}>
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    width={800}
                    height={1000}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <div className={styles.slideText}>
                  <h1
                    className={`${styles.title} ${
                      index === currentSlide ? styles.animate : ""
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`${styles.text} ${
                      index === currentSlide ? styles.animate : ""
                    }`}
                  >
                    {slide.description}
                  </p>

                  <div
                    className={`${styles.buttonNav} ${
                      index === currentSlide ? styles.animate : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleManualSwitch("prev")}
                    >
                      <i className={styles.arrow}> &#8592; </i>
                    </button>
                    <span></span>
                    <button
                      type="button"
                      onClick={() => handleManualSwitch("next")}
                    >
                      <i className={styles.arrow}>&#8594;</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Slider_2;

// return (
//   <div>
//     <section id="roto" className={isActive ? 'active' : ''}>
//       <div id="rotoTransition" className="carousel slide carousel-fade">
//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//             >
//               <div className="slide">
//                 <img src={slide.src} alt={slide.alt} className="mainImage" />
//                 <div className="roundOuter">
//                   <img src={slide.src} alt={slide.alt} />
//                 </div>
//                 <div className="roundInner">
//                   <img src={slide.src} alt={slide.alt} />
//                 </div>
//                 <div className="slideText">
//                   <h1 className="animate__animated animate__fadeInUp">{slide.title}</h1>
//                   <p className="animate__animated animate__fadeInUp">{slide.description}</p>
//                   <div className="buttonNav animate__animated animate__fadeInDown">
//                     <div className='btn_next'
//                       type="button"
//                       onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
//                     >
//                       <i className="fa-solid fa-arrow-left-long"></i>
//                     </div>
//                     <span></span>
//                     {/* <button
//                       type="button"
//                       onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
//                     >
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </button> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//   </div>
// );
