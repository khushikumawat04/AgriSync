import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const MandisTradeSection = () => {
  const navigateToMandi = () => {
    window.location.href = "https://enam.gov.in/web/dashboard/trade-data";
  };

  return (
    <div className="container my-4">
        <div className="text-center">
      <h4 className="common-heading text-center">📢 Mandis Trade Details</h4>

</div>
      {/* Latest Updates (Ticker) */}
      <div className="bg-light p-2 rounded shadow-sm">
        <marquee behavior="scroll" direction="left" className="fw-bold text-dark">
          🌾 Wheat - ₹2500/Quintal (Delhi) | 🍚 Rice - ₹3200/Quintal (Punjab) |
          🍅 Tomato - ₹1800/Quintal (Mumbai) | 🌽 Maize - ₹2200/Quintal (Bangalore)
        </marquee>
      </div>

      {/* Mandi Info Cards  */}
      <div className="row my-3">
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Wheat</h5>
              <p className="card-text text-success">₹ / Quintal</p>
              {/* <p className="card-text text-muted">Delhi</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Rice</h5>
              <p className="card-text text-success">₹ / Quintal</p>
              {/* <p className="card-text text-muted">Punjab</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Tomato</h5>
              <p className="card-text text-success">₹ / Quintal</p>
              {/* <p className="card-text text-muted">Mumbai</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Maize</h5>
              <p className="card-text text-success">₹ / Quintal</p>
              {/* <p className="card-text text-muted">Bangalore</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Redirect Button */}
      <div className="text-center">
        <button onClick={navigateToMandi} className="btn btn-gradient text-white fw-bold px-4 py-2">
          📊 View Full Trade Data
        </button>
      </div>

      {/* Logistic data */}
      <div className="text-center mt-5">
      <h4 className="common-heading text-center">📢 Agro Logistics Data </h4>

</div>
      <div className="row my-3">
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Rivigo Services Pvt Ltd</h5>
             
              <a href = "relay.rivigo.com" className = "btn btn-success mt-2 btn-sm">Read More</a>
              {/* <p className="card-text text-muted">Delhi</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Truck Guru</h5>
             
              <a href = "www.truckguru.co.in" className = "btn btn-success mt-2 btn-sm">Read More</a>
              {/* <p className="card-text text-muted">Delhi</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Transin Logistics</h5>
             
              <a href = "www.transin.in" className = "btn btn-success mt-2 btn-sm">Read More</a>
              {/* <p className="card-text text-muted">Delhi</p> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="card text-center shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title fw-bold">Truck Suvidha</h5>
             
              <a href = "www.trucksuvidha.com" className = "btn btn-success mt-2 btn-sm">Read More</a>
              {/* <p className="card-text text-muted">Delhi</p> */}
            </div>
          </div>
        </div>
      
      </div>

      {/* Redirect Button */}
      <div className="text-center">
        <button onClick={navigateToMandi} className="btn btn-gradient text-white fw-bold px-4 py-2">
          📊 View Full  Data
        </button>
      </div>

    </div>
  );
};

export default MandisTradeSection;
