import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const consultants = [
  {
    name: "Dr. Rajesh Verma",
    expertise: "Organic Farming Specialist",
    phone: "+91 9876543210",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ms. Priya Sharma",
    expertise: "Soil & Fertilizer Expert",
    phone: "+91 9823456789",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mr. Anil Kumar",
    expertise: "Irrigation & Water Management",
    phone: "+91 9012345678",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Dr. Rajesh Verma",
    expertise: "Organic Farming Specialist",
    phone: "+91 9876543210",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Ms. Priya Sharma",
    expertise: "Soil & Fertilizer Expert",
    phone: "+91 9823456789",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Mr. Anil Kumar",
    expertise: "Irrigation & Water Management",
    phone: "+91 9012345678",
    image: "https://via.placeholder.com/100",
  }
];

const ConsultingSection = () => {
  return (
    <div className="container my-4">
        <div className="text-center mt-5">
      <h4 className=" common-heading text-center mb-4 ">🌱 Farming Consultation</h4>
      </div>
      <div className="row mt-5">
        {consultants.map((consultant, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card shadow-sm border-success text-center p-3">
              {/* <img
                src={consultant.image}
                alt={consultant.name}
                className="rounded-circle mx-auto"
                style={{ width: "80px", height: "80px" }}
              /> */}
              <h5 className="mt-3 fw-bold">{consultant.name}</h5>
              <p className="text-muted">{consultant.expertise}</p>
              <a
                 href={`tel:${consultant.phone}`}
                target="_blank"
             
                className="btn btn-gradient text-white btn-sm m-auto"
                style={{ width: "120px" }}
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultingSection;
