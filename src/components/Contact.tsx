import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/hatimnathwara"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — hatimnathwara
              </a>
            </p>
            <h4>Location</h4>
            <p>Kuwait</p>
            <h4>Phone</h4>
            <p style={{ marginBottom: '4px' }}>
              <a href="https://wa.me/96596782730" target="_blank" rel="noopener noreferrer">
                +965 9678-2730
              </a>
            </p>
            <p>
              <a href="https://wa.me/917976136532" target="_blank" rel="noopener noreferrer">
                +91 79761-36535
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/hatimnathwara"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://behance.net/hatimali"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="mailto:Hatimnathwara12@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed by <br /> <span>Hatim Nathwara</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
