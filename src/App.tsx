import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/Routes';
import Navigation from './components/Navigation/Navigation';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-500">
        <Navigation>
          <Routes />
        </Navigation>
      </div>
    </Router>
  );
}

export default App;
