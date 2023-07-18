import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// import "../assets/edited_image/download.jpeg"
const Products = () => {
 const location = useLocation();
  useEffect(() => {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return () => {
     
    }
  }, [location])
  
  return (
    <>
   {/* ============================ Breadcrumbs ============================ */}
   <div className="breadcrumbs">
    <div
      className="page-header d-flex align-items-center"
      style={{ backgroundImage: 'url("assets/img/page-header.jpg")' }}
    >
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>Our Products</h2>
           
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
          <li>Our Products</li>
        </ol>
      </div>
    </nav>
  </div>


<section id="service" className="services pt-0">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span>Our Products</span>
          <h2>Our Products</h2>
        </div>
        <div className="row gy-4">
           
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Main and Auxiliary Engine.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Main and Auxiliary Engine
                </a>
              </h3>
              <p>
              CAT / MAK / EMD / DETROIT DIESEL / ROLLS ROYCE / MTU / MAN / CUMMINS / ZF / WARTSILA / PIELSTICK 
              </p>
            </div>
          </div>
         
          
          {/* Generators & Spares */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Generators & Spares.jpg"
                  alt="Generators & Spares"
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Generators & Spares
                </a>
              </h3>
              <p>
              CATERPILLAR / CUMMINS/ MAN B&W/ WARTSILA/ YANMAR
              </p>
            </div>
          </div>


          {/* End Card Item */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Drilling Equipments.jpg"
                  alt="Drilling Equipments"
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Drilling Equipments
                </a>
              </h3>
              <p>
              BOP/BOP CONTROL UNIT/DRILL PIPES/MUD PUMP/ROUGHNECK/SHALE SHAKER/WINCH
              </p>
            </div>
          </div>
          
          
          {/* Marine & Offshore Crane */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Marine & Offshore Crane.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Marine & Offshore Crane
                </a>
              </h3>
              <p>
              ALASKA /HUISMAN / HYDRA MARINE/ KING POST/ LIEBHERR/MACGREGOR/ NOV/ TTS
              </p>
            </div>
          </div>
  
  
          {/*Turbo Charger & Spares */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Turbo Charger & Spares.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Turbo Charger & Spares
                </a>
              </h3>
              <p>
              ABB /IHI /KBB /MITSUBISHI /NAPIER
              </p>
            </div>
          </div>
          
          
          {/* Air Compressor */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Air Compressor.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Air Compressor
                </a>
              </h3>
              <p>
              HAMWORTHY /HATLAPA /JP SAUER & SOHNS /SPERRE /TANABE
              </p>
            </div>
          </div>

          {/* Hydraulic Pump & Motors */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Hydraulic Pump & Motors.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Hydraulic Pump & Motors
                </a>
              </h3>
              <p>
              PARKER /REXROTH /SAUER DANFOSS /VOITH
              </p>
            </div>
          </div>

           {/* Marine Pump */}
           <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Marine Pump.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                Marine Pump
                </a>
              </h3>
              <p>
              ALLWEILER /DESMI /KSB /NANIWA /SHINKO /SULZER
              </p>
            </div>
          </div>

         

          {/* Electric and Electronics Equipments */}
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Electric and Electronics Equipments.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                
                Electric and Electronics Equipments
                </a>
              </h3>
              <p>
              ABB /BBC /CUTLER /DANFOSS /FUJI /HAMMER /HYUNDAI /L&T /MERLIN /SIEMENS /TELEMECANIQUE /TERASAKI /YASKAWA
              </p>
            </div>
          </div>

           {/* Safety Equipments */}
           <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src="assets/img/Safety Equipments.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>
                <a href={()=>false} className="stretched-link">
                
                Safety Equipments
                </a>
              </h3>
              <p>
              CO2 CYLINDER /DRAGER /FENZY /FIRE SUIT /MSA /SCBA SET /SCOTT
              </p>
            </div>
          </div>
         
          {/* End Card Item */}
        </div>
      </div>
    </section>
    </>
  )
}

export default Products