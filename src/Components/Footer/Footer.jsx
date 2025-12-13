import React from 'react'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
export default function Footer() {
    return (
        <div className='bg-[#222]'>
            <div className='container mx-auto max-w-7xl text-white pt-[75px] pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:place-items-center pl-4 gap-y-12 lg:gap-y-0 gap-5'>
                <div className='flex flex-col self-start'>
                    <h2 className='pb-8 font-bold'>CATEGORIES</h2>
                    <ul className='list-none gap-3'>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Women</Link>
                        </li>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Men</Link>
                        </li>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Shoes</Link>
                        </li>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Watches</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col self-start'>
                    <h2 className='pb-8 font-bold'>HELP</h2>
                    <ul className='list-none gap-3'>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Track Order</Link>
                        </li>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Returns</Link>
                        </li>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>Shipping</Link>
                        </li>
                        <li className='my-2 text-sm text-neutral-400'>
                            <Link to='/'>FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col self-start'>
                    <h2 className='pb-8 font-bold'>GET IN TOUCh</h2>
                    <ul className='list-none'>
                        <li className='my-2 text-sm text-neutral-400'>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </li>
                        <li className=' mt-6 text-sm text-neutral-400 flex gap-3'>
                            <Link to='/' className='mr-4'>
                            <FaFacebookF size={'18px'}/>
                            </Link>
                            <Link to='/' className='mr-4'>
                            <FaInstagram size={'18px'}/>
                            </Link>
                            <Link to='/' className='mr-4'>
                            <FaPinterestP size={'18px'}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col self-start'>
                    <h2 className='pb-8 font-bold'>Newsletter</h2>
                    <input type="email" placeholder='email@example.com' className='w-full bg-transparent placeholder:text-neutral-400  border-b border-gray-500 pb-1 focus:border-blue-custom'/>
                    <button className='w-[179px] text-lg mt-5 h-11 text-white font-bold rounded-[32px] min-w-44 bg-blue-custom text-center hover:bg-white hover:text-blue-custom transition-all duration-300'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
