import React from 'react';
import { Link } from 'react-router';
import Navbar from '../navbar/components/navbar_container';


const App = ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>
      {children}
  </div>
);

export default App;
