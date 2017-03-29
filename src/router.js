import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from './routes/Login/Login.js';

import Share from './routes/Share/Share.js';

import Sharer from './routes/Sharer/Sharer.js';

import ShareInfo from './components/Share/ShareInfo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/login" component={Login} />
      <Route path="/share" component={Share} />
      <Route path="/share/info" component={ShareInfo} />
      <Route path="/sharer" component={Sharer} />
    </Router>
  );
}

export default RouterConfig;
