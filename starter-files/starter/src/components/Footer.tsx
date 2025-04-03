import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Social Share Section */}
      <div className="footer-column">
        <h3 className="footer-title">Social Share</h3>
        <div className="social-icons">
          {[
            { href: "#", iconClass: "fab fa-facebook-f" },
            { href: "#", iconClass: "fab fa-instagram" },
            { href: "#", iconClass: "fab fa-twitter" },
            { href: "#", iconClass: "fab fa-linkedin-in" },
          ].map(({ href, iconClass }, index) => (
            <a key={index} href={href} className="social-icon">
              <i className={iconClass}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Event Info Section */}
      <div className="footer-column">
        <h3 className="footer-title">Event Info</h3>
        <ul className="footer-links">
          {[
            "Enter Now",
            "Event Info",
            "Course Map",
            "Race Pack",
            "Results",
            "FAQs",
            "Am I Registered?",
          ].map((text, index) => (
            <li key={index}>
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Registration Section */}
      <div className="footer-column">
        <h3 className="footer-title">Registration</h3>
        <ul className="footer-links">
          {[
            "Volunteers",
            "Gallery",
            "Press",
            "Results",
            "Privacy Policy",
            "Service Plus",
            "Contacts",
          ].map((text, index) => (
            <li key={index}>
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Schedule Section */}
      <div className="footer-column">
        <h3 className="footer-title">Schedule</h3>
        <ul className="footer-links">
          {[
            "Gallery",
            "About",
            "Videos",
            "Results",
            "FAQs",
            "Results",
            "Volunteers",
          ].map((text, index) => (
            <li key={index}>
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
