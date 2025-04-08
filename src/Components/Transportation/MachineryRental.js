import { useState } from "react";
import "../../App.css"

const machineryData = [
  { id: 1, name: "Tractor", provider: "Ram Machinery", contact: "9876543210", location: "Jaipur, Rajasthan", price: "₹500/hr" },
  { id: 2, name: "Harvester", provider: "Shyam Agro", contact: "8765432109", location: "Delhi, India", price: "₹1500/hr" },
  { id: 3, name: "Plough Machine", provider: "Krishna Equipments", contact: "7654321098", location: "Pune, Maharashtra", price: "₹300/hr" },
];

export default function MachineryRental() {
  const [search, setSearch] = useState("");

  const filteredMachines = machineryData.filter((machine) =>
    machine.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
        <div className="text-center">
      <h2 className="text-2xl font-bold mb-4 mt-5 common-heading text-center"  >Machinery Rental Services</h2>
      </div>
      {/* Search Box */}
      {/* <input
        type="text"
        placeholder="Search machines..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}

      {/* Machine Listings */}
      <div className="space-y-4 row  gap-4 justify-content-center">
        {filteredMachines.length > 0 ? (
          filteredMachines.map((machine) => (
        
            <div class="card mb-3 col-md-5 " key={machine.id}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="/images/harvestor.jpg.jpg" class="img-fluid h-100 w-100" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h3 className="text-xl font-semibold common-heading" >{machine.name}</h3>
             <p><strong>Provider:</strong> {machine.provider}</p>
            <p><strong>Location:</strong> {machine.location}</p>
              <p><strong>Rental Price:</strong> {machine.price}</p>
               <a href={`tel:${machine.contact}`} className="mt-2 btn  inline-block text-white  rounded btn-gradient" >
               Call Now
               </a>
      </div>
    </div>
  </div>
</div>
          ))
        ) : (
          <p className="text-red-500">No machines found.</p>
        )}
      </div>
    </div>
  );
}
