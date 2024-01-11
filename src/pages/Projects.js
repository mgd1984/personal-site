import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Ventures/Cell';
import data from '../data/ventures';

const Ventures = () => (
  <Main
    title="Ventures"
    description="Learn about Alec Miller's ventures."
  >
    <article className="post" id="ventures">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/ventures">Ventures</Link></h2>
          <p>A selection of personal ventures and professional ventures.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Ventures;
