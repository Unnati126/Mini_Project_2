import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', age: '', gender: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert("Registration successful!");
    navigate('/tracker');
  };

  return (
    <div className="home-container">
      <div className="form-wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            value={formData.age}
            onChange={handleChange}
          />
          <div className="gender">
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} required /> Other</label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Home;