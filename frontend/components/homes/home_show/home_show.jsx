import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.fetchActiveHome(this.props.params.homeId);
  }

  render() {
    console.log(this.props.activeHome)
    return <div>
      Name: {this.props.activeHome.name}
      Address: {this.props.activeHome.address}
      </div>
  }

}

export default HomeShow
