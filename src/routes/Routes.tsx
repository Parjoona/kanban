import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BOARD, HOME } from '../constants/routes';
import Home from '../pages/Home/Home';
import Board from '../pages/Board/Board';

export default function Routing() {
  return (
    <div className="container mx-auto">
      <Switch>
        <Suspense fallback="Loading ...">
          <Route path={HOME} exact component={Home} />
          <Route path={BOARD} exact component={Board} />
        </Suspense>
      </Switch>
    </div>
  );
}
