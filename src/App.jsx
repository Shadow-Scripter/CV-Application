import React from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';

const App = () => {
  return (
    <div className="App">
      <h1>CV Generator</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;