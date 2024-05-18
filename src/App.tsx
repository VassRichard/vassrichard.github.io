import React from "react";
import './App.css';
import { LandingArea } from './components/LandingArea/LandingArea';
import { ExperienceArea } from './components/ExperienceArea/ExperienceArea';

function App() {
  return (
    <React.Fragment>
       <LandingArea />
      <ExperienceArea />
    </React.Fragment>
  );
}

export default App;
