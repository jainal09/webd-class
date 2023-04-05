import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Workday is a provider of cloud-based software that specializes in
              applications for financial management, enterprise resource
              planning (ERP), and human capital management (HCM).
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>Suite 101</li>
              <li>San Francisco, CA 94103</li>
              <li>info@workday.com</li>
              <li>(800) 555-1212</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>&copy; {new Date().getFullYear()} Workday, Inc.</p>
            </div>
            <div className="col-sm-6">
              <p className="float-end">Terms of Service | Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
