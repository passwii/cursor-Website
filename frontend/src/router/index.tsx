import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from '../pages/admin/Admin';
import ExchangeRate from '../pages/admin/components/toolset/exchange/ExchangeRate';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/toolset/exchange" element={<ExchangeRate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter; 