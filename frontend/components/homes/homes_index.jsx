import React from 'react';
import { Link, withRouter } from 'react-router';


class HomesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }

  componentWillMount() {
    this.props.fetchHomes();
  }

  populateHomes() {
    let homes = [];
    for(let key in this.props.homes) {
      homes.push(
        <li key={key}>{this.props.homes[key].name}</li>
      );
    }

    return <ul>{homes}</ul>
  }



  render() {
    return <div>
      {this.populateHomes()}
    </div>
  }
}

export default HomesIndex;
