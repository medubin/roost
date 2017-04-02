import React from 'react';
import { Router,  hashHistory } from 'react-router'


class LandingPage extends React.Component {

  componentWillMount() {
    if (this.props.defaultHomeId) {
      hashHistory.push('/homes/' + this.props.defaultHomeId);
    }
  }

    render() {
      return <div className="landingPage">
        Welcome to Roost! {this.props.username}
      </div>
    }
}


export default LandingPage;
