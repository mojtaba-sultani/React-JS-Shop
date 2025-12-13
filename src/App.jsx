import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { useRoutes } from 'react-router'
import Routes from './routes'
import Footer from './Components/Footer/Footer'
export default function App() {
  let router = useRoutes(Routes)
  return (
    <div>
      <header className='bg-white shadow w-full fixed top-0 z-10'>
        <Navbar />
      </header>
      <div className='mt-[70px]'>
        {router}
      </div>
      <Footer />
    </div>
  )
}
