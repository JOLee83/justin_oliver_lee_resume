import React, { Component } from 'react';
class Education extends Component {
  render() {
    return (
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
    );
  }
}

export default Education;