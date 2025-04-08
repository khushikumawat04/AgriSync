import React, { useState } from 'react';
import axios from 'axios';

const BuyerRegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '', password: '', role: 'buyer', name: '', phone: '',
    address: '', city: '', state: '', pincode: '', preferredCropType: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', formData);
      alert('Buyer registered successfully!');
    } catch (err) {
      alert('Error: ' + err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buyer Registration</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="state" placeholder="State" onChange={handleChange} />
      <input name="pincode" placeholder="Pincode" onChange={handleChange} />
      <input name="preferredCropType" placeholder="Preferred Crop Type" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default BuyerRegisterForm;
