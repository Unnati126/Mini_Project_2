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



/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', age: '', gender: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userData");
    if (user) {
      navigate('/tracker');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    alert(`Welcome, ${formData.name}! 🎉`);
    setFormData({ name: '', age: '', gender: '' });
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate('/tracker');
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Register</h2>
          <div className="mb-3">
            <input type="text" className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <input type="number" className="form-control" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          </div>

          <div className="mb-3 d-flex justify-content-around">
          <label className="form-label">Gender:</label><br />
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Home;



// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    alert("Registration Successful!");
    setFormData({ name: '', email: '', age: '', gender: '' });
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        
        
        <div className="col-md-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Fitness"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center bg-white">
          <div style={{ width: '80%', maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Gender</label>
                <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;


import React from 'react';

<div className="mb-3 d-flex justify-content-around">
          <label className="form-label">Gender:</label><br />
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
          </div>*/