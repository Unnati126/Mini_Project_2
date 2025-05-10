import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '60vh' }}
    >
      <div
        className="card shadow p-4"
        style={{ width: '100%', maxWidth: '400px', borderRadius: '13px' }}
      >
        <h4 className="text-center text-success mb-4">BMI Calculator</h4>

        <div className="mb-3">
          <label>Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Height (cm)</label>
          <input
            type="number"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-4 text-center alert alert-info">
            <p><strong>Your BMI:</strong> {bmi}</p>
            <p><strong>Category:</strong> {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;