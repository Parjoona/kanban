import React from 'react';
import Routes from './routes/Routes';

import Navigation from './components/Navigation/Navigation';
import './index.css';

function App() {
  return (
    <>
      <Navigation>
        <div className="container mx-auto">
          <Routes />
        </div>
      </Navigation>
    </>
  );
}

export default App;
