import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchActiveHome(this.props.params.homeId);
  }

  renderUsers() {
    if (this.props.activeHome.users == undefined) {
      return
    }
    console.log(this.props.activeHome)
    let users = this.props.activeHome.users.map((user, key) => {

      return <li key={key}>{user.username}</li>
    })
    return <ul>{users}</ul>
  }

  render() {
    console.log(this.props.activeHome)
    return <div>
      Name: {this.props.activeHome.name}
      <br/>
      Address: {this.props.activeHome.address}
      {this.renderUsers()}

      </div>


  }

}

export default HomeShow
