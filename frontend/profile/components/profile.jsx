import React from 'react';

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

export default Profile
