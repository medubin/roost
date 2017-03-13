import React from 'react';
import { Link, withRouter } from 'react-router';
import HomeForm from './home_form';

class Homes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <HomeForm/>
    </div>
  }
}

export default Homes;
