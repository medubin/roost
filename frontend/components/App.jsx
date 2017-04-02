import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';


const App = ({ children }) => (
  <div>
    <header>

      <GreetingContainer />
    </header>
      {children}
  </div>
);

export default App;

// <Link to="/" className="header-link">
  // <h1>Roost</h1>
// </Link>
