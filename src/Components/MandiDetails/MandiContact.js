import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MandiContact = () => {
  const redirectToENAM = () => {
    window.location.href = "https://enam.gov.in/web/dashboard/trade-data";
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-success text-center">
        <div className="card-body">
          <h4 className="card-title text-success fw-bold">
            🌾 Mandi Contact Details
          </h4>
          <p className="card-text text-muted">
            Find the latest trade data, mandi contact details, and commodity
            prices.
          </p>
          <button onClick={redirectToENAM} className="btn btn-gradient fw-bold px-4 py-2">
            🔗 View More 
          </button>
        </div>
      </div>
    </div>
  );
};

export default MandiContact;
