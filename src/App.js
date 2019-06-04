import React from 'react';


function App() {
  return (
    <div className="resume">
      <div className="top-div">
        <div>
          <section className="header">
            <header className="name">
              Justin Oliver Lee
            </header>
            <header className="job">
              Web Developer
            </header>
          </section>

          <section className="objective">
            <header className="sec-title">Objective</header>
            <p>
              Seeking a position in Front-end or Full-stack Web Development where I can put what I have learned to use and continue to grow as a Developer. Along with ways to get involved and give back to the local developer community.
            </p>
          </section>

        </div>
        <section className="contact">
          <ul>
            <li>
              <i className="fas fa-map-marker-alt" /> Seattle, WA
          </li>
            <li>
              <a href="tel://19044729516"><i className="fas fa-phone-square" /> (904) 472-9516</a>
            </li>
            <li>
              <a href="mailto:lee.justin.oliver@gmail.com"><i className="fas fa-envelope-square" /> lee.justin.oliver@gmail.com</a>
            </li>
            <li>
              <a href="https://www.justin-oliver.com"><i className="fas fa-globe" /> justin-oliver.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/justin-oliver-lee/"><i className="fab fa-linkedin" /> justin-oliver-lee</a>
            </li>
            <li>
              <a href="https://github.com/JOLee8"><i className="fab fa-github-square" /> JOLee83</a>
            </li>
          </ul>
        </section>
      </div>




      <section className="skills">
        <header className="sec-title">Skills</header>
        <div className="skills-div">
          <div>
            HTML
          </div>
          <div>
            CSS
          </div>
          <div>
            JavaScript
          </div>
          <div>
            C#
          </div>
          <div>
            SQL
          </div>
          <div>
            Git
          </div>
          <div>
            RESTful API
          </div>
          <div>
            SASS
          </div>
          <div>
            LESS
          </div>
          <div>
            Styled Components
          </div>
          <div>
            Flex Box
          </div>
          <div>
            BootStrap
          </div>
          <div>
            Bulma
          </div>
          <div>
            React
          </div>
          <div>
            Redux
          </div>
          <div>
            Gatsby
          </div>
          <div>
            .Net
          </div>
          <div>
            Postgres
          </div>
          <div>
            Word
          </div>
          <div>
            Excel
          </div>
          <div>
            Power Point
          </div>
          <div>
            Access
          </div>
          <div>
            QuickBooks
          </div>
          <div>
            Operations Management
          </div>
          <div>
            Inventory Management
          </div>
        </div>
      </section>



      <section className="experience">
        <header className="sec-title">Experience</header>
        <div>
          <header>
            <span className="where">Seattle JS Hackers</span>
            <span className="what">Organizer / Host / Developer</span>
            <span className="when">Feb 2019 - Present</span>
          </header>
          <p>A local meet up group in Seattle, WA. Help organize and lead events with developers of all skill levels; including Open Code, Lean Coffee, and Code Katas. Built and maintain groups website using Gatsby and SASS</p>
        </div>
        <div>
          <header>
            <span className="where">Quicklee Inventory</span>
            <span className="what">Lead Developer</span>
            <span className="when">2018</span>
          </header>
          <p>A full-stack web app that I built as a small business solution for tracking inventory costs. The front-end is built with React and SASS, the back-end is an API built with C#, .Net, Linq, and Entity.</p>
        </div>
        <div>
          <header>
            <span className="where">Ricky P's Inc</span>
            <span className="what">Operations Manager</span>
            <span className="when">Jan 2012 - Sep 2017</span>
          </header>
          <p>Managed a New Orleans style restaurant and bar located in St Petersburg, FL. Tracked cost of goods and labor, menu cost analysis, payroll, scheduled staff, hired and coordinated training for front of house.</p>
        </div>
        <div>
          <header>
            <span className="where">Venture Quest Mgmt</span>
            <span className="what">Manager</span>
            <span className="when">Jul 2005 - Aug 2010</span>
          </header>
          <p>Part of a management team at a high-volume nightclub and martini bar with a tapas menu in Jacksonville, FL. Scheduled and communicated with staff for daily business and special promotional events, maintained payroll, inventory management, tracked sales and compiled cash deposits along with credit card sales</p>
        </div>
      </section>

      {/* <section className="activities">
        <header className="sec-title">Activities</header>
      </section> */}

      <section className="education">
        <header className="sec-title">Education</header>
        <div>
          <span>
            <header>Suncoast Developers Guild</header>
            <p>Full-Stack Web Development</p>
            <p>2018</p>
          </span>
          <span>
            <header>University Of South Florida</header>
            <p>Business Management</p>
            <p>2012 - 2015</p>
          </span>
          <span>
            <header>Saint Petersburg College</header>
            <p>Associates of the Arts Degree</p>
            <p>2009 - 2012</p>
          </span>
        </div>
      </section>

    </div>
  );
}

export default App;
