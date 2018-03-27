import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';
import IconLabelTabs from './containers/IconLabelTabs/IconLabelTabs';
import './styles/common.css';
import './styles/bootstrap-grid.min.css';


const App = () => (
  <Router>
    <div className="c-app">
      <Helmet>
        <meta name="description" content="Awesome React Redux Hot boilerplate" />
      </Helmet>
      <div className="c-app__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <IconLabelTabs />
    </div>
  </Router>
);

export default App;
