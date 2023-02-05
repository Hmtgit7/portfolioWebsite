import React from 'react'
import NavBar from "./Component/NavBar"
import Home from './Component/Home'
import About from './Component/About'
import SocialLinks from "./Component/SocialLinks";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />

      <About />
      <About />
      <About />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App