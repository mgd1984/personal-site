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
      <div className="">
        <iframe title="streamlit" src="https://image-analyzer.streamlit.app/?embedded=true" />
      </div>
    </article>
  </Main>
);

export default Demos;
