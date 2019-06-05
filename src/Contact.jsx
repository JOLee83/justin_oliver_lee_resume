import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return (
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
    );
  }
}

export default Contact;