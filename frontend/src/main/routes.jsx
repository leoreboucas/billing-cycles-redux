import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './App';
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

function Routes() {
  return (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
  );
}

export default Routes;