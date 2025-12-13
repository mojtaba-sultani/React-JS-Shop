import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import allDatas from '../../datas';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router';

let filteredCategory = ['allProduct', ...new Set(allDatas.products.map(item => item.category))]
export default function AllProducts() {
  const [allProductsCategory] = useState(filteredCategory)
  const [allProducts] = useState(allDatas);
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-12 text-base md:text-lg'>
        <div className="flex gap-4 md:gap-8">
          {allProductsCategory.map((item, index) => (
            <button className='text-neutral-400  hover:text-neutral-800  hover:border-b border-neutral-800 transition-all duration-300' key={index}>{item}</button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className='flex px-4 py-2 md:px-7 md:py-5 h-10 border border-gray-200 justify-center items-center gap-1 rounded hover:bg-blue-custom hover:text-white transition-all duration-300'>
            <MdOutlineFilterList />
            Filter
          </button>
          <button className='flex p-4 md:p-5 h-10 border border-gray-200 justify-center items-center gap-1 rounded hover:bg-blue-custom hover:text-white transition-all duration-300'>
            <IoMdSearch />
            Search
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
        {allProducts.products.map(product => (
          <Link to='/shop' key={product.id} className='flex flex-col mb-9'>
            <div className='w-[270px] h-[334px] transition-all duration-700 hover:scale-105 hover:overflow-hidden'>
              <img className='w-[95%] h-[95%]' src={product.img} alt="" />
            </div>
            <div className='flex items-center justify-between w-[260px]'>
              <h1 className='text-neutral-400'>{product.titleProduct}</h1>
              <CiHeart size={'24px'} className='hover:text-blue-custom cursor-pointer' />
              {/* <FaHeart size={'18px'} className='text-blue-custom'/> */}
            </div>
            <p>${product.priceProduct}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
