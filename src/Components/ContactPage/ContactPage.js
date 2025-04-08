import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../../App.css"

const ContactPage = () => {
  return (
    <div className="container my-5">
        <div  className="text-center">
      <h2 className="text-center common-heading  mb-4">📞 Contact Us</h2>
      </div>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h4 className="text-center common-heading  m-auto"  style={{fontSize:"18px"}}>Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">Send Message</button>
            </form>
          </div>
        </div>

        {/* Contact Details & Map */}
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h4 className="text-center w-25 m-auto common-heading" style={{fontSize:"18px"}}> Get in Touch</h4>
            <ul className="list-unstyled mt-4">
              <li className="mb-2">
                <FaMapMarkerAlt className=" me-2"  style={{color:"var(--dark-green)"}}/> 123, Green Farm, Agri Nagar, India
              </li>
              <li className="mb-2">
                <FaPhone className=" me-2" style={{color:"var(--dark-green)"}} /> <a style={{color:"black",textDecoration:"none"}} href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="mb-2">
                <FaEnvelope className=" me-2" style={{color:"var(--dark-green)"}} /> <a  style={{color:"black",textDecoration:"none"}} href="mailto:contact@agriculture.com">contact@agriculture.com</a>
              </li>
            </ul>

            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093705!2d-122.4194156846812!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1a0739a2e1%3A0x25b9f5c7c1c91a1e!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1612902267123!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
