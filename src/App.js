import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { RouteTransition, presets } from 'react-router-transition';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';
import './App.css';

const App = () => (
  <Router>
    <Route render={({ location }) => (
      <div>
        <Helmet>
          <meta name='description' content='Awesome React Redux Hot boilerplate' />
        </Helmet>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <RouteTransition
          pathname={location.pathname}
          {...presets.slideLeft}
        >
          <Switch key={location.key} location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </RouteTransition>
      </div>
    )} />
  </Router>
);

export default App;
