import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }

    //-------------------------------- * Mobile nav toggle ---------------------
    
   const mobileNavShow = document.querySelector('.mobile-nav-show');
   const mobileNavHide = document.querySelector('.mobile-nav-hide');
 
   document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
     el.addEventListener('click', function(event) {
       event.preventDefault();
       mobileNavToogle();
     })
   });
 
   function mobileNavToogle() {
     document.querySelector('body').classList.toggle('mobile-nav-active');
     mobileNavShow.classList.toggle('d-none');
     mobileNavHide.classList.toggle('d-none');
   }
 
   /***--------------------- Hide mobile nav on same-page/hash links------------*/
   document.querySelectorAll('#navbar a').forEach(navbarlink => {
 
     if (!navbarlink.hash) return;
 
     let section = document.querySelector(navbarlink.hash);
     if (!section) return;
 
     navbarlink.addEventListener('click', () => {
       if (document.querySelector('.mobile-nav-active')) {
         mobileNavToogle();
       }
     });
 
   });
 
   /***-------------------------- Toggle mobile nav dropdowns------------------*/
   const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
 
   navDropdowns.forEach(el => {
     el.addEventListener('click', function(event) {
       if (document.querySelector('.mobile-nav-active')) {
         event.preventDefault();
         this.classList.toggle('active');
         this.nextElementSibling.classList.toggle('dropdown-active');
 
         let dropDownIndicator = this.querySelector('.dropdown-indicator');
         dropDownIndicator.classList.toggle('bi-chevron-up');
         dropDownIndicator.classList.toggle('bi-chevron-down');
       }
     })
   });

    return () => {
     
    }
  }, [])
  
  return (
    <>
    
    {/* ======= Header ======= */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1><img src='ZAMAN MARINE.png'></img></h1>
      </a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to='/products'>Our Products</Link>
          </li>
          <li>
            <Link to='/new-arrivals'>New Arrivals</Link>
          </li>
          
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <Link className="get-a-quote" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* End Header */}
    </>
  )
}

export default Navbar