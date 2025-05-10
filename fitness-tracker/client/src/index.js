import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WorkoutProvider } from './context/WorkoutContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <WorkoutProvider>
    <App />
  </WorkoutProvider>,
  document.getElementById('root')
);

reportWebVitals();