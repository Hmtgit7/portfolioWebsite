import React from 'react'
import NavBar from "./Component/NavBar"
import Home from './Component/Home'
import About from './Component/About'
import SocialLinks from "./Component/SocialLinks";
import Portfolio from './Component/Portfolio';
import Experience from './Component/Experience'
import Contact from './Component/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App