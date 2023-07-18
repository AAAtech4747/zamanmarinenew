import React from 'react'

const Footer = () => {
  return (
    <>
    <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
            <span><img src='ZAMAN MARINE.png'></img></span>
          </a>
          
          <div className="social-links d-flex mt-4">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-links">
        <h4>Contact Us</h4>
        </div>
        <div className="col-lg-2 col-6 footer-links">
        <p>
            Bhavnagar <br />
            Gujarat
            <br />
            India <br />
            <br />
            
          </p>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          
         <p>
         <strong>Phone:</strong> +91 9825208919
            <br />
            <strong>Email:</strong> info@zamaanmarine.com
            <br />
         </p>
          
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        © Copyright 2023
        <strong>
          <span>Keyan Marine</span>
        </strong>
        . All Rights Reserved
      </div>
      
    </div>
  </footer>
    </>
  )
}

export default Footer