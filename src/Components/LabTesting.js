import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const fieldTestingServices = [
  {
    title: "Soil pH Testing",
    desc: "Check soil acidity/alkalinity directly at your field.",
    phone: "9999999991",
  },
  {
    title: "Moisture Level Check",
    desc: "Instant moisture analysis for better crop planning.",
    phone: "9999999992",
  },
  {
    title: "Fertilizer Recommendation",
    desc: "Get personalized fertilizer suggestions at your location.",
    phone: "9999999993",
  },
  {
    title: "Pesticide Inspection",
    desc: "On-spot pesticide usage safety check.",
    phone: "9999999994",
  },
];

const labTestingServices = [
  {
    title: "Soil Nutrient Analysis",
    desc: "Detailed NPK, micronutrients report in our lab.",
    phone: "8888888881",
  },
  {
    title: "Water Quality Testing",
    desc: "Lab check for irrigation water safety and minerals.",
    phone: "8888888882",
  },
  {
    title: "Crop Disease Diagnosis",
    desc: "Send infected samples for expert diagnosis.",
    phone: "8888888883",
  },
  {
    title: "Organic Content Testing",
    desc: "Get organic matter and carbon content results.",
    phone: "8888888884",
  },
];

const LabaTestingSection = () => {
  return (
    <div className="container my-5">
         <div className="text-center">
      <h2 className="text-center mb-4 common-heading">Lab Testing Services</h2>
      </div>
      {/* Testing at Your Field */}
      <h4 className="mb-3 common-heading" style={{fontSize:"18px"}}>Testing at Your Field</h4>
      <div className="row">
        {fieldTestingServices.map((service, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
                <a href={`tel:${service.phone}`} className="btn btn-gradient">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testing at Our Lab */}
      
      <h4 className="mt-5 mb-3 common-heading" style={{fontSize:"18px"}}>Testing at Our Lab</h4>
    
      <div className="row">
        {labTestingServices.map((service, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
                <a href={`tel:${service.phone}`} className="btn btn-gradient">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabaTestingSection;
