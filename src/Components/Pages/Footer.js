import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>FuelTrack</h2>
      <div className="social-icons">
       <FaFacebook/>
       <FaLinkedin/>
       <FaWhatsapp/>
       <FaInstagram/>
      </div>
    </div>
  );
};

export default Footer;
