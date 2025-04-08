import React, { useState } from 'react';
import axios from 'axios';

const SellerRegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '', password: '', role: 'seller', name: '', phone: '',
    villageName: '', district: '', state: '', landArea: '', cropType: '', shopName: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/register', formData);
      alert('Seller registered successfully!');
    } catch (err) {
      alert('Error: ' + err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Seller Registration</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="villageName" placeholder="Village" onChange={handleChange} />
      <input name="district" placeholder="District" onChange={handleChange} />
      <input name="state" placeholder="State" onChange={handleChange} />
      <input name="landArea" placeholder="Land Area (in acres)" onChange={handleChange} />
      <input name="cropType" placeholder="Crop Type" onChange={handleChange} />
      <input name="shopName" placeholder="Shop Name" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default SellerRegisterForm;
