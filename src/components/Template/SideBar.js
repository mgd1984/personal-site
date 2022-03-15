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
      <p>Hi, I&apos;m Alec. I like making stuff.
        I am an <a href="https://ivey.uwo.ca/">Ivey School of Business</a> graduate, Pierre Morrissette Institute for
        Entrepreneurship Alumni, and owner/operator of Overview Analytics - an analytics consultantcy in Toronto <a href="psynapse.io"></a>. Before Overview I was
        at <a href="https://rogers.com">Rogers Communications</a>
        , <a href="https://marsdd.com">MaRS</a>
        , <a href="https://techalliance.ca">TechAlliance</a>
        , <a href="https://lenovo.com">Lenovo</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alec Miller <Link to="/">psynapse.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
