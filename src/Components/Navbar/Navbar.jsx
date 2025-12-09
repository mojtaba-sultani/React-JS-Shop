import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router';
export default function Navbar() {
  return (
    <>
      <nav className='h-[70px]  w-full text-base  px-4 sm:p-0 container'>
        <div className='flex justify-between items-center h-full'>
          <Link to='/'>
            <img src={'src/assets/images/icons/logo-01.png'} alt=""/>
          </Link>
          <ul className='gap-6 hidden md:flex'>
            <li className='hover:text-blue-custom font-semibold'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:text-blue-custom font-semibold'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li className='hover:text-blue-custom font-semibold'>
              <a href="#">Features</a>
            </li>
            <li className='hover:text-blue-custom font-semibold'>
              <a href="#">Blog</a>
            </li>
            <li className='hover:text-blue-custom font-semibold'>
              <a href="#">About</a>
            </li>
            <li className='hover:text-blue-custom font-semibold'>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className='flex items-center'>
            <IoMdSearch size={24} className='cursor-pointer hover:text-blue-custom md:mr-4' />
            <div className='relative p-2 md:p-4'>
              <span className='absolute top-0 md:top-2 right-0 md:right-2 bg-blue-custom  px-1 text-white text-xs'>2</span>
            <FaShoppingCart size={24} className='cursor-pointer hover:text-blue-custom' />
            </div>
            <div className='relative p-3 md:p-4'>
              <span className='absolute top-1 md:top-2 right-1 md:right-2 bg-blue-custom  px-1 text-white text-xs'>2</span>
            <CiHeart size={24} className='cursor-pointer hover:text-blue-custom' />
            </div>
            <GiHamburgerMenu size={26} className='m-3 md:m-4 cursor-pointer hover:text-blue-custom md:hidden'/>
          </div>
        </div>
      </nav>
    </>
  )
}
