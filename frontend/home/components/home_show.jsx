import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'
import HomeSideNav from './home_side_nav'
import { fetchActiveHome, joinHome } from '../actions/home_actions'

const mapStateToProps = ({ home }) => ({
  activeHome: home.activeHome,

})

const mapDispatchToProps = (dispatch) => ({
    fetchActiveHome: id => dispatch(fetchActiveHome(id)),
    joinHome: homeId => dispatch(joinHome(homeId))
})


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
    return (
      <div className="col s12 m8 l9">
        {this.renderJoinButton()}
        Name: {this.props.activeHome.name}
        <br/>
        Address: {this.props.activeHome.address}
        {this.renderUsers()}
      </div>

    )

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
