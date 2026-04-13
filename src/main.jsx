import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ ADD THIS
import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {' '}
      {/* ✅ THIS IS THE FIX */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
