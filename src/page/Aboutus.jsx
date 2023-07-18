import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Aboutus = () => {
  const location = useLocation()

  useEffect(() => {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return () => {
      
    }
  }, [location])
  

  return (
    <>
    {/* ============================ Breadcrumbs =================================== */}
    <div className="breadcrumbs">
    <div
      className="page-header d-flex align-items-center"
      style={{ backgroundImage: 'url("assets/img/page-header.jpg")' }}
    >
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>About</h2>
            
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* ============================ About-us =================================== */}
   <section id="about" className="about pt-0">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <img src="assets/img/features-4.jpg" className="img-fluid" alt="" />
            <a
              href={()=>false}
              className="glightbox play-btn"
            />
          </div>
          <div className="col-lg-6 content order-last  order-lg-first">
            <h3>About Us</h3>
            <p>
            Keyan Marine is the most trusted name in marine & Offshore machinery & spares. We are merchant stockists, Traders & Exporters based near the 2nd largest ship recycling yard ALANG. We deal in new and re-furbished ship machineries and it's spares procured from ship recyclers.
            </p>
            <p>
            Our portfolio includes Main & Aux. Engine & Spares, Drilling Equipments, Turbo Chargers & Spares, Fresh Water Generators, Hydraulic Equipments, Air Compressors, Navigation Equipments, Pumps, Governor, Marine Cranes, Automation Equipments, Safety Equipments and many more.
            </p>
           
            
          </div>
        </div>
      </div>
    </section>

  {/* ===================== Horizontal Pricing Section ===================== */}
  <section id="horizontal-pricing" className="horizontal-pricing pt-0">
    <div className="container" data-aos="fade-up">
      
      <div
        className="row gy-4 pricing-item"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="lets_talk col-lg-3 d-flex align-items-center justify-content-center d-flex">
        <p>ARE YOU LOOKING FOR A</p>
          <h3 className='h3_edited'>Marine Spares Provider?</h3>
          <p>Schedule your session right now!</p>

        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
        <h4>
            <sup><i className='bi bi-telephone-forward-fill'></i></sup > <a className='call' href="tel:+919825208919">9825208919</a><span> </span>
          </h4>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <Link to="/contact-us" className="buy-btn">
             Contact us 
            </Link>
          </div>
        </div>
      </div>
      {/* End Pricing Item */}
     
      
    </div>
  </section>
    </>
  )
}

export default Aboutus