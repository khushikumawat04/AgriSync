import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start text-white position-relative">
        {/* Green Overlay */}
        <div className="overlay"></div>

        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* <!-- Right --> */}
          <div>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* <!-- Section: Links  --> */}
        <section className="footer-content">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Company Info */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company Name</h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet.
                </p>
              </div>

              {/* Products */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><a href="#!" className="text-white">Angular</a></p>
                <p><a href="#!" className="text-white">React</a></p>
                <p><a href="#!" className="text-white">Vue</a></p>
                <p><a href="#!" className="text-white">Laravel</a></p>
              </div>

              {/* Useful Links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><a href="#!" className="text-white">Pricing</a></p>
                <p><a href="#!" className="text-white">Settings</a></p>
                <p><a href="#!" className="text-white">Orders</a></p>
                <p><a href="#!" className="text-white">Help</a></p>
              </div>

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                <p><i className="fas fa-phone me-3"></i> +01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> +01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div className="text-center p-4 text-white" style={{ background: "linear-gradient(45deg, var(--light-green), var(--orange))" }}>
          © 2025 Copyright:
          <a className="fw-bold text-white text-decoration-none" href="https://digitalsavers.in/"> Digital Savers </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
