import React from 'react'
import Navbar_comp from './Navbar/nabar'
import Footer from './Footer/footer'
import Homepage from '../Pages/Stduent/Home/Homepage'
import About from '../Pages/Stduent/AboutUs/About'
import Contact from '../Pages/Stduent/ContactUs/Contact'
import { Outlet } from 'react-router-dom'


const LayoutPage = () => {
  return (
    <>
      <Navbar_comp/>
      <Outlet />
      <Footer/>
      
     
    </>
  )
}

export default LayoutPage
