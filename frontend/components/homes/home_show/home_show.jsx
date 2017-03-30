import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeHome: {}
    };
  }

  componentWillMount() {
    this.props.fetchActiveHome(this.props.params.homeId);
  }

  render() {
    console.log(this.state.activeHome);
    return <div>TEST</div>
  }

}

export default HomeShow
