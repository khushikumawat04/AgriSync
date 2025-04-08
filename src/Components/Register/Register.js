import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"

function RegisterPage() {


  return (
    <div className="container text-center mt-5 mb-5">
      <h1 className="mb-4 common-heading">Welcome to AgriMarket</h1>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title common-heading" style={{fontSize:"18px"}}>Register as Seller</h5>
                <p className="card-text">
                  Sell your crops and agricultural products online.
                </p>
                <Link to="/SellerRegister" className="btn btn-gradient">
                  Continue as Seller
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4 mt-md-0">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title common-heading" style={{fontSize:"18px"}}>Register as Buyer</h5>
                <p className="card-text">
                  Buy fresh farm products directly from sellers.
                </p>
                <Link to="/BuyerRegister" className=" btn btn-gradient" >
                  Continue as Buyer
                </Link>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default RegisterPage;
