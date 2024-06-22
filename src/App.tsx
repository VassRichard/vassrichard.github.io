import React from "react";
import './App.css';
import { LandingArea } from './components/LandingArea/LandingArea';
import { AboutMeArea } from './components/AboutMeArea/AboutMeArea';
import { CareerArea } from './components/CareerArea/CareerArea';
import { ServicesArea } from './components/ServicesArea/ServicesArea';
import { SomethingArea } from './components/SomethingArea/SomethingArea';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <LandingArea />
      <AboutMeArea />
      <ServicesArea />
      {/* <SomethingArea /> */}
      {/* <CareerArea /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
