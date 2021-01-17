import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Board from '../pages/Board/Board';

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Suspense fallback="Loading ...">
          <Route path="/board" exact component={Board} />
        </Suspense>
      </Switch>
    </Router>
  );
}
