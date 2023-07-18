import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../logo.svg';
import "./SlickSlider.css"
import PureCounter from "@srexi/purecounterjs";
import { Helmet } from 'react-helmet';
import "../assets/android-chrome-512x512.png"
import { Link, useLocation } from 'react-router-dom';

const pure = new PureCounter();


const Home = () => {
   const location = useLocation();
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    useEffect(() => {

    
    //-------------------------* Initiate glightbox-----------------------//
     
    
    new PureCounter();
      
     
     
    //-------------------------* Initiate glightbox-----------------------//
       
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      
      return () => {
       
      }
    }, [location])
    
  return (
   <>
    <Helmet>
    <title>Zaman Marine</title>
    <meta name="site_name" content="Infigrity IT Services - Infinite. Integrity."/>
        <meta name="type" content="article" />
        <meta name="title" content="Trusted Marine Equipment Company"/>
        <meta name="url" content="" />
        <meta name="image" content={logo} />
        <meta name="image:secure_url" content={logo} />
        <meta property="og:image" content="../assets/android-chrome-512x512.png"></meta>
        <meta name="theme-color" content="#0c0c0c"></meta>
        <meta name="description" content="Trusted Marine Equipment Company"></meta>
        
    </Helmet>
    {/* ======= Hero Section ======= */}
  <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row gy-4 d-flex justify-content-between">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h2 data-aos="fade-up">  We are one of the leading suppliers of Marine Spares and Equipment's </h2>
          <p className='hero_p' data-aos="fade-up" data-aos-delay={100}>
          Welcome to  <span>Zaman </span>Marine
          </p>
         
          <div className="row gy-4" data-aos="fade-up" data-aos-delay={400}>
            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}

                  data-purecounter-duration={3}
                  className="purecounter"
                />
                <p>Years Experiance</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={247}
                  data-purecounter-duration={2}
                  className="purecounter"
                />
                <p>Work Employed</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={2}
                  className="purecounter"
                />
                <p>Happy Customer</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={75}
                  data-purecounter-duration={2}
                  className="purecounter"
                />
                <p>Our Services</p>
              </div>
            </div>
            {/* End Stats Item */}
          </div>
        </div>
        <div
          className="col-lg-5 order-1 order-lg-2 hero-img"
          data-aos="zoom-out"
        >
          <img
            src="./assets/img/marine.png"
            className="img-fluid mb-3 mb-lg-0"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Section */}

  <main id="main">
    {/* ===================== Featured Services Section ===================== */}
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
          >
            <div className="icon flex-shrink-0">
              <i className="fa-solid fa-cart-flatbed" />
            </div>
            <div>
              <h4 className="title">Equipment Sales</h4>
              <p className="description">
              Marine equipment companies offer a wide range of marine equipment and supplies for boat owners, shipyards, and marinas.
              </p>
              <a
                href={()=>false}
                className="readmore stretched-link"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Equipment Sales */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon flex-shrink-0">
              <i className="fa-solid fa-truck" />
            </div>
            <div>
              <h4 className="title">Equipment Installation and Maintenance</h4>
              <p className="description">
              They provide professional installation and maintenance services to ensure optimal functioning of marine equipment within vessels. 
              </p>
              <a
                href={()=>false}
                className="readmore stretched-link"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon flex-shrink-0">
              <i className="fa-solid fa-truck-ramp-box" />
            </div>
            <div>
              <h4 className="title">Consultation and Customization</h4>
              <p className="description">
              Marine equipment companies offer expert consultation and customization services to help customers select the right equipment and tailor it to their specific vessel requirements.
              </p>
              <a
                href={()=>false}
                className="readmore stretched-link"
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
    
    {/* ============================ About Us Section ============================ */}
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
            Marine Technic is a major and reliable supplier of spare parts, technical equipment and what else might be needed offshore for vessels all over the world. We know the importance of correct and fast delivery and over the years we have built up very reliable and good relations with our suppliers, thus always ensuring you the best possible prices and the great opportunity of ordering from different makers at one place.
            </p>
            <p>
            Marine Technic is the only right contact – whether your demand is for a small simple item or the most complex system we are able to offer you the optimum technical and economical solution.
            </p>
            <p>
            The staff of Marine Technic is always ready to render the best professional and most trustworthy service whenever and wherever you are in need of any kind of offshore supply.
            </p>
            
          </div>
        </div>
      </div>
    </section>
    
    {/* =================================== Services Section ===================== */}
    <section id="service" className="services pt-0">
    <div className="section-header">
          <span>Our Products</span>
          <h2>Our Products</h2>
        </div>
        <div className="shell">
    <div className="container">
      <div className="row">
        <Slider {...settings}>
        {/*================== Generators & Spares.jpg================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Generators & Spares.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Generators & Spares</span>
              </div>
              
              <div className="description-prod">
                <p>
                CATERPILLAR / CUMMINS/ MAN B&W/ WARTSILA/ YANMAR
                </p>
              </div>
             
            </div>
          </div>
        </div>
        {/*================== Drilling Equipments================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Drilling Equipments.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Drilling Equipments</span>
              </div>
              
              <div className="description-prod">
                <p>
                BOP/BOP CONTROL UNIT/DRILL PIPES/MUD PUMP/ROUGHNECK/SHALE SHAKER/WINCH
                </p>
              </div>
             </div>
          </div>
        </div>
         {/*==================  Marine & Offshore Crane================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Marine & Offshore Crane.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span> Marine & Offshore Crane</span>
              </div>
              
              <div className="description-prod">
                <p>
                ALASKA /HUISMAN / HYDRA MARINE/ KING POST/ LIEBHERR/MACGREGOR/ NOV/ TTS
                </p>
              </div>
              
            </div>
          </div>
        </div>
         {/*==================  Turbo Charger & Spares================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Turbo Charger & Spares.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Turbo Charger & Spares</span>
              </div>
              
              <div className="description-prod">
                <p>
                ABB /IHI /KBB /MITSUBISHI /NAPIER
                </p>
              </div>
              
            </div>
          </div>
        </div>
         {/*==================  Turbo Charger & Spares================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Air Compressor.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Air Compressor</span>
              </div>
              
              <div className="description-prod">
                <p>
                HAMWORTHY /HATLAPA /JP SAUER & SOHNS /SPERRE /TANABE
                </p>
              </div>
              
            </div>
          </div>
        </div>
         {/*==================   Hydraulic Pump & Motors================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Hydraulic Pump & Motors.webp"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span> Hydraulic Pump & Motors</span>
              </div>
              
              <div className="description-prod">
                <p>
                PARKER /REXROTH /SAUER DANFOSS /VOITH
                </p>
              </div>
             
            </div>
          </div>
        </div>
         {/*==================   Marine Pump================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Marine Pump.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Marine Pump</span>
              </div>
              
              <div className="description-prod">
                <p>
                ALLWEILER /DESMI /KSB /NANIWA /SHINKO /SULZER
                </p>
              </div>
              
            </div>
          </div>
        </div>
         {/*==================   Electric and Electronics Equipments================== */}
        <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Electric and Electronics Equipments.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Electric and Electronics Equipments</span>
              </div>
              
              <div className="description-prod">
                <p>
                ABB /BBC /CUTLER /DANFOSS /FUJI /HAMMER /HYUNDAI /L&T /MERLIN /SIEMENS /TELEMECANIQUE /TERASAKI /YASKAWA
                </p>
              </div>
              
            </div>
          </div>
        </div>

         {/*==================   Safety Equipments================== */}
         <div className="col-md-3">
          <div className="wsk-cp-product">
            <div className="wsk-cp-img">
              <img
                src="assets/img/Safety Equipments.jpg"
                alt="Product"
                className="img-responsive"
              />
            </div>
            <div className="wsk-cp-text">
              <div className="category">
                <span>Safety Equipments</span>
              </div>
              
              <div className="description-prod">
                <p>
                CO2 CYLINDER /DRAGER /FENZY /FIRE SUIT /MSA /SCBA SET /SCOTT
                </p>
              </div>
             
            </div>
          </div>
        </div>
       
        </Slider>
      </div>
      
    </div>
  </div>
    
    </section>

 {/*===================================  Slider=================================== */}

 

{/* ============================ Call To Action Section ============================ */}
    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>WHY CHOOSE OUR COMPANY</h3>
            <p>
            We have a well equipped workshop with a skilled team
            </p>
            <p>
            
            <a className='call call_edited' href="tel:+919825208919"><span><i className='bi bi-telephone-forward-fill'></i></span>+919825208919
            
            </a>
            </p>
            <Link to="/contact-us" className="cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
   
  
  
   
   
   
  </main>
  {/* End #main */}

  
   </>
  )
}

export default Home