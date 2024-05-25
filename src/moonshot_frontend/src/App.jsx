import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { moonshot_backend } from 'declarations/moonshot_backend';
import { MSAppBar } from './common/MSAppBar';
import { Marketplace } from './components/Marketplace/Marketplace';
import { SellTicket } from './components/SellTicket/SellTicket';


const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = event.target.elements.name.value;
    // moonshot_backend.greet(name).then((greeting) => {
    //   setGreeting(greeting);
    // });
    return false;
  }

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

export default App;
