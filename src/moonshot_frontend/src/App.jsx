import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { moonshot_backend } from 'declarations/moonshot_backend';
import { MSAppBar } from './common/MSAppBar';
import { Marketplace } from './components/Marketplace/Marketplace';

import { SellTicket }  from './components/SellTicket/SellTicket';

import { MyTickets } from './components/MyTickets/MyTickets';

import { CheckoutSuccess } from './components/CheckoutStatus/CheckoutSuccess';
import { CheckoutFailed } from './components/CheckoutStatus/CheckoutFailed';


export const App = () => {
  return (
    <Router> 
      <MSAppBar />
      <Routes>
        <Route path="/checkout-failed" element={<CheckoutFailed />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/sell-ticket" element={<SellTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}
