import React from "react";

const ContactUs = () => {
  const handleCall = () => {
    window.open("tel:9060888902");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/9060888902");
  };

  const handleEmail = () => {
    window.open("mailto:vksachin86@gmail.com");
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/Yc2CajLgdNF73WmLA");
  };

  return (
    <div className="contact-page">
      <div className="contact-background"></div>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Visit our Karate Class in Vijayapur</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon phone" onClick={handleCall}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.4 2.4.8 3.5L5.3 11.8c-.5-1.5-.8-3-.8-4.6V6z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>Phone Number</h3>
                <p>9060888902</p>
                <button className="contact-btn" onClick={handleCall}>
                  Call Now
                </button>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon whatsapp" onClick={handleWhatsApp}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.96 9.96 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>WhatsApp</h3>
                <p>9060888902</p>
                <button className="contact-btn" onClick={handleWhatsApp}>
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon email" onClick={handleEmail}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>vksachin86@gmail.com</p>
                <button className="contact-btn" onClick={handleEmail}>
                  Send Email
                </button>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon location" onClick={handleLocation}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>
                  Bharatiya jai Bheem Dal Karate Class
                  <br />
                  Vijayapur, Karnataka
                </p>
                <button className="contact-btn" onClick={handleLocation}>
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          <div className="map-section">
            <div className="map-container">
              <h3>Our Class Location</h3>
              <div className="map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.34503909219!2d75.7260581!3d16.8092305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc655001958a553%3A0x54030187b5eacc9c!2sAnilkumar%20Karate%20Class!5e0!3m2!1sen!2sin!4v1762410497005!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karate Class Location"
                ></iframe>
              </div>
              <div className="location-details">
                <p>
                  <strong>Address:</strong> Bharatiya jai Bheem Dal Karate
                  Class, Vijayapur, Karnataka
                </p>
                {/* <p>
                  <strong>Landmark:</strong> Near the main city area
                </p> */}
              </div>
              <button className="map-btn" onClick={handleLocation}>
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>

        <div className="visit-us">
          <h2>Visit Our Class</h2>
          <p>
            We welcome you to visit our karate Class in Vijayapur. Experience
            traditional martial arts training in a professional environment.
          </p>
          <div className="timing-info">
            <h4>Class Timings:</h4>
            <p>Morning: 6:00 AM - 8:00 AM</p>
            <p>Evening: 5:00 PM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
