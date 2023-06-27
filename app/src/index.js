import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Browser router hume yha pr use kiya hai jo ki humne react-router-dom se uthaya hai ye basically humne isliye use kiya hai jaki hum APP.js me Route and Routes use kr ske */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
        {/* Browser router hume yha pr use kiya hai jo ki humne react-router-dom se uthaya hai ye basically humne isliye use kiya hai jaki hum APP.js me Route and Routes use kr ske */}
  </React.StrictMode>
);

