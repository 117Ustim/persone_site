'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Next.js оптимизация изображений
import './slider_portfolio.page.scss'

import React, { useRef } from 'react';

const slides = [
  {
    title: "Lossless Youths",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg"
  },
  {
    title: "Estrange Bond",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "https://i.redd.it/tc0aqpv92pn21.jpg"
  },
  {
    title: "The Gate Keeper",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
  },
  {
    title: "Last Trace Of Us",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "https://images7.alphacoders.com/878/878663.jpg"
  },
  {
    title: "Urban Decay",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
  },
 
  {
    title: "Urban Decay",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    image: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
  },
];


// переписать классы под модули

const Slider_2 = () => {
  const sliderRef = useRef(null);

  const activate = (direction) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll(".item");

    if (direction === "next") {
      slider.appendChild(items[0]); 
    } else if (direction === "prev") {
      slider.insertBefore(items[items.length - 1], items[0]); 
    }
  };

  return (
   <div className = 'container_slider_2'>
    {/* <main> */}
      <ul className="slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <li key={index} className="item" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="content">
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={() => activate("prev")}>Prev</button>
        <button className="btn next" onClick={() => activate("next")}>Next</button>
      </nav>
    {/* </main> */}
    </div> 
  );
};

export default Slider_2;


