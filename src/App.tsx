import React from "react";
import './App.css';
import { LandingArea } from './components/LandingArea/LandingArea';
import { ExperienceArea } from './components/ExperienceArea/ExperienceArea';
import { UnderDevelopmentArea } from './components/UnderDevelopmentArea/UnderDevelopmentArea';

function App() {
  return (
    <React.Fragment>
      <LandingArea />
      <ExperienceArea />
      <UnderDevelopmentArea />
    </React.Fragment>
  );
}

export default App;
