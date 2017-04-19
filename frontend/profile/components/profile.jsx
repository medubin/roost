import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../actions/user_actions';

const mapStateToProps = ({ user }) => ({
  user: user.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username))
});


class Profile extends React.Component {
  constructor(props) {
		super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.username)
  }

  render() {
    return <div>{this.props.user.username}</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
