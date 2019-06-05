import React from 'react';
import Header from './Header.jsx'
import Objective from './Objective.jsx'
import Contact from './Contact.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx';

function App() {
  return (
    <>
      {/* <i className="fab fa-js back" /> */}
      <div className="top-div">
        <div>
          <Header />
          <Objective />
        </div>
        <Contact />
      </div>
      <Skills />
      <Experience />
      <Education />
    </>
  );
}

export default App;
