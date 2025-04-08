import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from "react-icons/fa";

const suppliers = [
  { name: "Green Agro Seeds", type: "Organic Seeds Supplier", location: "Delhi", phone: "+919876543210" },
  { name: "Farmers' Compost", type: "Natural Fertilizer & Compost", location: "Pune", phone: "+919823456789" },
  { name: "AgroTech Solutions", type: "Hybrid Seeds & Growth Boosters", location: "Mumbai", phone: "+919012345678" },
  { name: "EcoFarm India", type: "Vermicompost & Bio Fertilizers", location: "Bangalore", phone: "+919011223344" },
];

const SeedCompostTable = () => {
  return (
    <div className="container my-5">
        <div className="text-center">
        <h4 className="common-heading text-center mb-4">🌿 Seed & Compost Suppliers</h4>
        </div>
    
      
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-success">
            <tr>
              <th>Supplier Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr key={index}>
                <td>{supplier.name}</td>
                <td>{supplier.type}</td>
                <td>{supplier.location}</td>
                <td>
                  <a href={`tel:${supplier.phone}`} className="btn btn-gradient text-white btn-sm">
                    <FaPhone /> Call Now
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeedCompostTable;
