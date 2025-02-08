import React from "react";
import whatsappImage from "../../assets/whatsapplogo.png"; // Adjust the path as needed
import '../../styling/Whatsapp/Whatsapp.css'

const WhatsApp = () => {
  return (
    <> 
        <div className="whatsapp-container">
        <a
          href="https://wa.me/923456265572?text=Hello%20Abdullah!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50"
        >
          <img
            src={whatsappImage}
            alt="WhatsApp"
            className="whatsapp-image"
            width={80}
          />
        </a>

        </div>
    </>
  );
};

export default WhatsApp;
