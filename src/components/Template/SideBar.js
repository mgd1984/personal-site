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
        <p><a href="mailto:"></a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alec. I like making stuff.
        I am an <a href="https://ivey.uwo.ca/">Ivey HBA</a> graduate. Formerly at Lenovo, TechAlliance, MaRS, and Rogers. Currently, owner/operator of Overview Analytics - a boutique data and analytics consultantcy focused on emerging technologies and business models.
        Before Overview Analytics I was
        at <a href="https://matroid.com">Rogers Communications/a>
        , <a href="https://planet.com">MaRS Discovery District</a>
        , <a href="https://planetaryresources.com">TechAlliance</a>

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alec MIller <Link to="/"></Link>.</p>
    </section>
  </section>
);

export default SideBar;
