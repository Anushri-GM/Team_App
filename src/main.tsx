import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './app/layout';
import Home from './app/page';
import TeamPage from './app/team/page';
import './app/globals.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  </React.StrictMode>
);
