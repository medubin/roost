import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeShow extends React.Component {
  constructor(props) {
    super(props)
    this.onClickJoinButton = this.onClickJoinButton.bind(this)
  }

  componentWillMount() {
    this.props.fetchActiveHome(this.props.params.homeId)
  }

  renderUsers() {
    if (this.props.activeHome.users == undefined) {
      return
    }

    let users = this.props.activeHome.users.map((user, key) => {

      return <li key={key}>
        <Link to={`/users/${user.username}`}>
          {user.username}
        </Link>

        </li>
    })
    return <ul>{users}</ul>
  }

  renderJoinButton() {
    if (!this.props.activeHome.isHousemate) {
      return <div>
       <button onClick={this.onClickJoinButton}>JOIN HOME</button>
       <br/>
       </div>
    }
  }

  onClickJoinButton() {
    this.props.joinHome(this.props.params.homeId)
  }

  render() {

    return <div>
      {this.renderJoinButton()}
      Name: {this.props.activeHome.name}
      <br/>
      Address: {this.props.activeHome.address}
      {this.renderUsers()}

      </div>


  }

}

export default HomeShow
