import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes';
import Navigation from './components/Navigation/Navigation';
import './index.css';

function App() {
  return (
    <Router>
      <Navigation>
        <div className="container mx-auto">
          <Routes />
        </div>
      </Navigation>
    </Router>
  );
}

export default App;
