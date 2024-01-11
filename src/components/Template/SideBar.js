import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Alec Miller</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p></p>
      <p>
        Hi, I&apos;m Alec. I like to make stuff &amp; including businesses, software, and music, and generative art.
      </p>
      <p>
        I&apos;m an <a href="https://ivey.uwo.ca/">Ivey School of Business</a> and <a href="https://learn.utoronto.ca/programs-courses/certificates/data-science">University of Toronto SCS </a> graduate
        with specializations in Entrepreneurship &amp; Data Science.
      </p>
      <p>
        I&apos;m the owner/operator of <a href="https://millhaus.ca">Millhaus Technology Services</a>, prior to which I worked in computer sales, data partnerships,
        telecom pricing analytics, and startup incubation including roles @ <a href="https://rogers.com">Rogers</a>,
        <a href="https://marsdd.com">MaRS</a>,
        <a href="https://techalliance.ca">TechAlliance</a>,
        and <a href="https://lenovo.com">Lenovo</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
      </section>

      <section id="footer">
      <ContactIcons />
      <p>
        &copy; Alec Miller <Link to="/">mgd1984.github.io/personal-site</Link>.
      </p>
      </section>
      </section>
);

export default SideBar;
