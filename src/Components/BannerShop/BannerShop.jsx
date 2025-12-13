import React, { useState } from 'react'
import allDatas from '../../datas'
import { Link } from 'react-router';
export default function BannerShop() {
  const [allData] = useState(allDatas);
  return (
    <div className='my-4 lg:my-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4'>
      {allData.banners.map(banner => (
        <Link key={banner.id} to='/shop' className='border bg-no-repeat bg-center bg-contain h-[250px] w-full relative  group cursor-pointer' style={{ backgroundImage: `url(${banner.img})` }}>
          <div className="absolute inset-0 bg-transparent/0 group-hover:bg-blue-custom/80 transition-all duration-500 p-5 md:p-9">
            <h2 className='text-3xl font-bold pb-2 group-hover:text-white'>{banner.title}</h2>
            <p className='text-sm group-hover:text-white'>{banner.detalis}</p>
            <button className='text-transparent font-bold group-hover:text-white absolute bottom-10 text-sm border-b border-white'>Shop Now</button>
          </div>
        </Link>
      ))}

    </div>
  )
}
