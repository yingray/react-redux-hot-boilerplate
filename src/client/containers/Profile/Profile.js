import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader';

const Profile = () => (
  <div>
    <Helmet>
      <meta name="description" content="Demo loading script" />
    </Helmet>
    <h2>Profile</h2>
    <p>The page makes code splitting as incrementally downloading the app. </p>
    <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md">
      Reference: Code Splitting
    </a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odit sequi assumenda ex
      excepturi modi, eos nostrum numquam facere. Perferendis pariatur tempore numquam consequuntur
      ab explicabo sed laboriosam accusantium in!
    </p>
  </div>
);

export default (module.hot ? hot(module)(Profile) : Profile);
