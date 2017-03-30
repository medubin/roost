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
    return <div>
      {this.props.activeHome.name}
      {this.props.activeHome.address}
      </div>
  }

}

export default HomeShow
