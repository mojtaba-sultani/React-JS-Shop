import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import allDatas from '../../datas';
import { Link } from 'react-router';

export default function SwiperJs() {
  const [allData] = useState(allDatas)
  return (
    <>

      <Swiper
       loop={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        
        navigation={true}
        modules={[Parallax, Navigation, Autoplay]}
        className="mySwiper"
      >

        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        {allData.slider.map((slider => (
          <SwiperSlide>
            <div
              className="parallax-bg"
              style={{
                backgroundImage: `url(${slider.img})`,
              }}
              data-swiper-parallax="-23%"
            ></div>
            <div className="text-xl lg:text-3xl text-gray-800 mb-5 lg:ml-20" data-swiper-parallax="-300">
              {slider.title}
            </div>
            <div className="text-3xl lg:text-6xl text-gray-800 flex flex-col lg:ml-20" data-swiper-parallax="-200">
              {slider.detalis}
            <Link to='/shop' className='p-3 w-40 text-base rounded-3xl bg-blue-custom text-white font-semibold mt-10 hover:bg-black transition-colors duration-500 text-center'>Shop Now</Link>
            </div>
          </SwiperSlide>
        )))}
      </Swiper>
    </>
  );
}
