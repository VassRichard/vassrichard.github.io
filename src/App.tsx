import React from "react";
import './App.css';
import { LandingArea } from './components/LandingArea/LandingArea';
import { ExperienceArea } from './components/ExperienceArea/ExperienceArea';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <LandingArea />
      <ExperienceArea />
      <Footer />
    </React.Fragment>
  );
}

export default App;
