'use client'
import Image from "next/image";
import { Virtual, Autoplay,EffectCoverflow,Pagination,EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "./sliderComp.scss";



export default function SliderComp({slider_header}) {
  

 
 
  const slides = slider_header.map((image, index) => (
 
 <SwiperSlide className="swiper-wrapper" key={index} virtualIndex={index} >

<Image
          src={image.img}alt={`Slide ${index + 1}`}
         
          priority={true}
          // alt="home_photo"
          width={'0'}
          height={'0'}
          style={{ width: '100%', height: '100%' }}
          unoptimized
        />


      {/* <img src={image.img} alt={`Slide ${index + 1}`} /> */}
    </SwiperSlide>  

  ));

  return (
    <Swiper
      modules={[EffectCoverflow, Pagination,Autoplay,EffectFade]}
       className="mySwiper"
      autoplay={{
        delay: 3000, 
        disableOnInteraction: true, 
      }}
      // loop={true}
      // effect={'coverflow'}
      // grabCursor={true}
      // centeredSlides={true}
      // slidesPerView={3}
      // coverflowEffect={{
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // }}

      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      
      pagination={true}
      
     
      //  breakpoints={{
      //    320: {
      //      slidesPerView: 2,
      //     spaceBetween: 30,
      //    },
      //    460: {
      //      slidesPerView: 2,
      //      spaceBetween: 50,
      //    },
      //  }}
    >
      {slides}
    </Swiper>
  );
}
