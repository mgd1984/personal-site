import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Demos = () => (
  <Main
    title="Demos"
    description="Contact Alec Miller via email @ alecjohnmiller at gmail dot com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Demos</Link></h2>
        </div>
      </header>
      <div className="email-at">
        {/* <p>Feel free to get in touch. You can email me at: </p> */}
        {/* Replace EmailLink with your desired component */}
        {/* <EmailLink /> */}
      </div>
      {/* Replace ContactIcons with your desired component */}
      {/* <ContactIcons /> */}
      <div className="youtube-video">
        <iframe
          width="100%"
          height="560"
          src="https://www.youtube.com/embed/smSUr6LG6lo"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="sandance-demo">
        <iframe
          id="embedIframe"
          src="https://microsoft.github.io/SandDance/embed/v4/sanddance-embed.html"
          width="100%"
          height="560"
          title="SandDance Demo"
        />
      </div>
    </article>
  </Main>
);

export default Demos;
