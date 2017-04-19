import React from 'react';
import { Link } from 'react-router';
import HomeSideNav from './components/home_side_nav';


const Home = ({ children }) => (
  <div className="row">
    <HomeSideNav />
      {children}
  </div>
);

export default Home;
