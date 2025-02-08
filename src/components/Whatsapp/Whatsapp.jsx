import React from "react";
import whatsappImage from "../../assets/whatsapplogo.png"; // Adjust the path as needed
import linkedinLogo from '../../assets/linkedinlogo.png';
import gmailLogo from '../../assets/gmailLogo.jpeg';
import '../../styling/Whatsapp/Whatsapp.css'

const WhatsApp = () => {
  return (
    <> 
        <div className="whatsapp-container">

        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=engineerabdullah020@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gmailLogo}
              alt="Email"
              className="gmail-image"
              width={80}
            />
          </a>
        <a
            href="https://wa.me/923456265572?text=Hello%20Abdullah!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsappImage}
              alt="WhatsApp"
              className="whatsapp-image"
              width={80}
            />
          </a>


          <a
            href="https://pk.linkedin.com/in/muhammad-abdullah-abbasi-417719288"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="linkedin-image"
            />
          </a>

          
        </div>
    </>
  );
};

export default WhatsApp;
