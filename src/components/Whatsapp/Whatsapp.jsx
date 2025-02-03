import React from "react";
import whatsappImage from "../../assets/whatsapplogo.png"; // Adjust the path as needed
import '../../styling/Whatsapp/Whatsapp.css'

const WhatsApp = () => {
  return (
    <>
        <div className="whatsapp-container">
            <a
            href="https://wa.me/yourwhatsappphonenumber" 
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
