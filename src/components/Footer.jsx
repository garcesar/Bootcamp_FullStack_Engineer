import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h3>Social Media</h3>
          <a href="#whatsapp">
            <img className="social-img" src="/assets/images/icons/whatsapp.png" alt="whatsapp" />
          </a>
          <a href="#facebook">
            <img className="social-img" src="/assets/images/icons/facebook.png" alt="facebook" />
          </a>
          <a href="#instagram">
            <img className="social-img" src="/assets/images/icons/instagram.png" alt="instagram" />
          </a>
        </div>

        <div className="footer-contact">
          <h3>Contactacnos</h3>
          <p>Email: contact@servicesuy.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>

        <div className="footer-map">
          <h3>Nuestra ubicación</h3>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6c5b0a1e7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611819392743!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
        </div>

        <div className="footer-bottom"></div>
        <p>&copy; 2024 César García Entregable. All rights reserved.</p>
      </div>
    </footer>
  )
}
