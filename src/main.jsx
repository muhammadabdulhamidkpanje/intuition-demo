import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import { Providers } from './providers';
import DemoAttestations from './pages/DemoAttestations';
import DashboardLayout from './layouts/DashboardLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<App />} />
            <Route path="demo-attestations" element={<DemoAttestations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);