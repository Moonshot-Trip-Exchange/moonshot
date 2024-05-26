import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { moonshot_backend } from 'declarations/moonshot_backend';
import { MSAppBar } from './common/MSAppBar';
import { Marketplace } from './components/Marketplace/Marketplace';
import { SellTicket }  from './components/SellTicket/SellTicket';

export const App = () => {
  return (
    <Router> 
      <MSAppBar />
      <Routes>
        <Route path="/sell-ticket" element={<SellTicket />} />
        <Route path="/" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}
