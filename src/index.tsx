import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Route1 from './routes/route1';
import Route2 from './routes/route2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="route1" element={<Route1 />} />
          <Route path="route2" element={<Route2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);