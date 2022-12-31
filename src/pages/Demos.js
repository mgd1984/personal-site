import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Demos = () => (
  <Main
    title="Stats"
    description="Generative AI Demos"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <iframe
            title="title"
            src="https://stabilityai-stable-diffusion.hf.space"
            frameBorder="0"
            width="100%"
            height="1249"
          />
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Demos;
