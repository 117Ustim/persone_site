'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Next.js оптимизация изображений
import styles from './slider_portfolio.module.scss'
import {slidesPortfolio} from '../../data'
import React, { useRef } from 'react';

// const slides = [
//   {
//     title: "Lossless Youths",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
//     image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg"
//   },
//   {
//     title: "Estrange Bond",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
//     image: "https://i.redd.it/tc0aqpv92pn21.jpg"
//   },
//   {
//     title: "The Gate Keeper",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
//     image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
//   },
//   {
//     title: "Last Trace Of Us",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
//     image: "https://images7.alphacoders.com/878/878663.jpg"
//   },
//   {
//     title: "Urban Decay",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
//     image: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
//   },
 
//   {
//     title: "Urban Decay",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
//     image: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
//   },
// ];


// переписать классы под модули

const Slider_portfolio = () => {
  const sliderRef = useRef(null);

  const activate = (direction) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll(`.${styles.item}`);

    if (direction === "next") {
      slider.appendChild(items[0]); 
    } else if (direction === "prev") {
      slider.insertBefore(items[items.length - 1], items[0]); 
    }
  };

  return (
    <div>
      <ul className={styles.slider} ref={sliderRef}>
        {slidesPortfolio.map((slide, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.background}style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src={slide.img} 
                alt={slide.title} 
                fill
                priority
                sizes="(max-width: 100vw) 50vw, 100vw" 
                style={{ objectFit: 'cover' }} 
                className={styles.image} 
              />
            </div>
            {/* <div className={styles.content}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.description}>{slide.description}</p>
              <button>Read More</button>
            </div> */}
          </li>
        ))}
      </ul>
      <nav className={styles.nav}>
        <button className={`${styles.btn} ${styles.prev}`} onClick={() => activate("prev")}>Prev</button>
        <button className={`${styles.btn} ${styles.next}`} onClick={() => activate("next")}>Next</button>
      </nav>
    </div>
  );
};

export default Slider_portfolio;


