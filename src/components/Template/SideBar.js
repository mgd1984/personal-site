import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import Login from '../PowerBI/Login';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Alec Miller</h2>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi 👋, I&apos;m Alec. I like making and fixing things - machines, models, prototypes, tools - and collaborating with the teams & businesses that create and use them. I&apos;m a graduate of the <a href="https://www.ivey.uwo.ca/hba/">Ivey Business School </a>
        and the <a href="https://learn.utoronto.ca/programs-courses/certificates/data-science"> University of Toronto SCS </a> with a specialization in Data Science.
      </p>
      <p>
        I&apos;m the owner/operator of <a href="https://millhaus.ca">Millhaus Technology Services</a>, prior to which I worked in computer sales, data partnerships,
        telecom pricing analytics, and startup incubation including roles @ <a href="https://rogers.com">Rogers</a>,
        <a href="https://marsdd.com"> MaRS</a>,
        <a href="https://techalliance.ca"> TechAlliance</a>,
        and <a href="https://lenovo.com"> Lenovo</a>.
        I&apos;m currently pursuing the <a href="https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-600/">Microsoft DP-600 Fabric Analytics Engineer Associate </a>
        and <a href="https://www.certifiedanalytics.org/">Certified Analytics Professional</a> designation.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">Learn More</Link>
          ) : (
            <Link to="/about" className="button">About Me</Link>
          )}
        </li>
      </ul>
      <Login /> {/* Render the Login component */}
    </section>
    <section id="footer">
      <ContactIcons />
      <p>
        &copy; Alec Miller <Link to="/">mgd1984.ca</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
