import React from 'react'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Products from './page/Products'
import {Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Contactus from './page/Contactus'
import Aboutus from './page/Aboutus'
import Newarrivials from './page/Newarrivials'
import { useEffect } from 'react'

import { useLocation } from 'react-router-dom';
const App = () => {
  const location = useLocation()
 useEffect(() => {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
 
   return () => {
    
   }
 }, [location])
 
 
 
  return (
    <>
     
    <Navbar/>
    {/* <Home/> */}
    <a
    href={()=>false}
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  <div id="preloader" /> 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/contact-us' element={<Contactus/>} />
      <Route path='/about-us' element={<Aboutus/>} />
      <Route path='/new-arrivals' element={<Newarrivials/>} />
      
    </Routes>
    <Footer/>
    
    
    </>
  )
}

export default App