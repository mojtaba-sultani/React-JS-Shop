import React from 'react'
import Swiper from '../../Components/SwiperJs/SliderSwiper'
import BannerShop from '../../Components/BannerShop/BannerShop'
import AllProducts from '../../Components/Shop/AllProducts'

export default function Home() {
  return (
    <>
    <Swiper/>
    <div className='max-w-7xl mx-4 xl:mx-auto'>

    <BannerShop/>
    <h1 className='text-3xl md:text-4xl font-bold my-12'>Product Overview</h1>
    <AllProducts/>
    </div>
    </>
  )
}
