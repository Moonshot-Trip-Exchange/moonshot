import { useState } from 'react';
import { Marketplace } from './components/Marketplace/Marketplace';
// import { moonshot_backend } from 'declarations/moonshot_backend';
import React from 'react'
import { MSAppBar } from './components/Marketplace/common/MSAppBar';


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
    <main>
            <MSAppBar />
      <Marketplace/>
      {/* <img src="/logo2.svg" alt="DFINITY logo" /> */}
      {/* <br />
      <br /> */}
      {/* <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form> */}
      {/* <section id="greeting">{greeting}</section> */}
    </main>
  );
}

export default App;
