import React from 'react'
import "./Contactus.css"
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { useEffect  } from 'react'
import { Link, useLocation } from 'react-router-dom';


const Contactus = () => {
   const loacation = useLocation(); 
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    comapny:'',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_jsy0qya';
    const templateId = 'template_5ocy4cq';
    const userId = '4tYquy1Oj4cVxoOX1';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
        alert('Email sent successfully');
        setFormData({
          fname: '',
          email: '',
          comapny: '',
          message: '',
        });
      }, (error) => {
        console.error(error);
        alert('Error sending email');
      });
  };
 

 useEffect(() => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 
   return () => {
   
   }
 }, [loacation])
 
  


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
            <h2>Contact Us</h2>
           
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
          <li>Contact Us</li>
        </ol>
      </div>
    </nav>
  </div>

   {/* ============================= Get a Quote Section ============== */}
   <div className="wrapper">
  <div className="form">
    
    <h2 className="form-headline">Send us a message</h2>
    <form id="submit-form" action="">
      <p>
        <input
          id="name"
          className="form-input"
          type="text"
          placeholder="Your Name*"
          name='fname'
          onChange={handleInputChange}
        />
        <small className="name-error" />
      </p>
      <p>
        <input
          id="email"
          className="form-input"
          type="email"
          placeholder="Your Email*"
          name='email'
          onChange={handleInputChange}
        />
        <small className="name-error" />
      </p>
      <p className="full-width">
        <input
          id="company-name"
          className="form-input"
          type="text"
          placeholder="Company Name*"
          required=""
          name='company'
          onChange={handleInputChange}
        />
        <small />
      </p>
      <p className="full-width">
        <textarea
          minLength={20}
          id="message"
          cols={30}
          rows={7}
          placeholder="Your Message*"
          required=""
          defaultValue={""}
          name='message'
          onChange={handleInputChange}
        />
        <small />
      </p>
     
     
        <button className="reset-btn" onClick={handleSubmit}>
         Submit
        </button>
     
    </form>
  </div>
  <div className="contacts contact-wrapper">
    <ul>
    
    <div class="card">
  <h5 class="card-header card-header_edt ">Get In Touch</h5>
  <div class="card-body .card-body-edt">
    <h5 class="card-title">Work Inquiries</h5>
    <p class="card-text">+91 9033808835</p>

    <h5 class="card-title">Assistance Hours:</h5>
    <p class="card-text">Mon - Sat 9:00am - 6:00pm</p>
  </div>
</div>
<div class="card">
  <h5 class="card-header card-header_edt">Address and Mail</h5>
  <div class="card-body .card-body-edt">
    <h5 class="card-title">Address</h5>
    <p class="card-text">Plot no: 288, Abhishek Society Bharatnagar Bhavnagar.</p>

    <h5 class="card-title">E-mail</h5>
    <p class="card-text">info@zamaanmarine.com</p>
  </div>
</div>
<div class="card">
  <h5 class="card-header card-header_edt">Social Media</h5>
  <div class="card-body .card-body-edt">
    <h5 class="card-title">Work Inquiries</h5>
    <p class="card-text">
    <div className="social-links d-flex mt-4">
            <a href={()=>false} className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href={()=>false} className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href={()=>false} className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href={()=>false} className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
    </p>

  </div>
</div>
      {/* <span className="hightlight-contact-info">
        
       
        <li>
        Work Inquiries
        </li>
        <li>
          <i className="fa fa-phone" aria-hidden="true" />
          <span className="highlight-text">Call us - +91 9825208919</span>
        </li>
      </span>

      <span className="hightlight-contact-info">
       <li>
        <i>Address and Mail</i>
       </li>
       <i aria-hidden="true" >
       Assistance Hours:
         Mon - Sat 9:00am - 6:00pm

         Sunday - CLOSED
        </i>
        <li className="email-info">
          <i className="fa fa-envelope" aria-hidden="true" />Email - info@zamaanmarine.com
        </li>
        <li>
          <i className="fa fa-phone" aria-hidden="true" >
          Bhavnagar
            </i>
        </li>
      </span>

      <span className="hightlight-contact-info">
       <li>
        <i>Social Media</i>
       </li>
        <li>
        <div className="social-links d-flex mt-4">
            <a href={()=>false} className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href={()=>false} className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href={()=>false} className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href={()=>false} className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </li>
      </span> */}
    </ul>
  </div>
</div>

    </>
  )
}

export default Contactus