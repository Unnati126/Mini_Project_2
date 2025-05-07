import React, { useState } from 'react'; 

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
    alert(`Welcome, ${formData.name}! 🎉`);
    setFormData({ name: '', age: '', gender: '' });
  };


  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded overflow-hidden" style={{ width: '80%', height: '80vh' }}>
        
        {/* Image Side */}
        <div className="col-md-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
            alt="Fitness"
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

        {/* Form Side */}
        <div className="col-md-6 p-5 bg-white">
          <h2 className="mb-4 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            {/*<div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>*/}

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
  );
};

export default Home;




/*import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    alert(`Welcome, ${formData.name}! 🎉`);
    setFormData({ name: '', email: '', age: '', gender: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register to Get Started</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
            required 
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input 
            type="number" 
            className="form-control" 
            name="age" 
            value={formData.age}
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label><br />
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              className="form-check-input" 
              name="gender" 
              value="Male" 
              checked={formData.gender === "Male"} 
              onChange={handleChange} 
              required 
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              className="form-check-input" 
              name="gender" 
              value="Female" 
              checked={formData.gender === "Female"} 
              onChange={handleChange} 
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Home;

import React from 'react';

const Home = () => {
    return (
        <div className="text-center mt=5">
            <h1>Welcome to Fitness Tracker</h1>
            <p className="lead mt-3">
                Track your workouts, monitor your progress, and achieve your fitness goals with our easy-to-use app.
            </p>

            <img 
        src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" 
        alt="Fitness Icon" 
        width="120" 
        className="mt-4"/>
        </div>
    );
};
function Home() {
    return (
        <div>
            <h2>Welcome to Fitness Tracker App</h2>
            <p>This app helps you record and analyze your workout sessions.</p>
        </div>
    );
}
    
export default Home;


<div className="mb-3">
          <label className="form-label">Email ID:</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            required 
          />
        </div>
*/