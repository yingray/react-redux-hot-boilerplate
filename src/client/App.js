import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';
import Loading from './containers/Loading/Loading';
import './styles/common.css';
import './styles/bootstrap-grid.min.css';

const Profile = new Loadable({
  loader: () => import('./containers/Profile/Profile.js' /* webpackChunkName: "chunk-profile" */),
  loading: Loading
});

const App = () => (
  <Router>
    <div className="container">
      <Helmet>
        <meta name="description" content="Awesome React Redux Hot boilerplate" />
      </Helmet>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
