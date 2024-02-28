import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
import './components/Demos/ContactIcons';
import './components/Demos/EmailLink';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Ventures = lazy(() => import('./pages/Ventures'));
const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));
const Demos = lazy(() => import('./pages/Demos'));

// const Demos = lazy(() => import('./pages/Demos'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/ventures" component={Ventures} />
        {/* <Route path="/stats" component={Stats} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/demos" component={Demos} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
