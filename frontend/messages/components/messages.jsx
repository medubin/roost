import React from 'react';
import { connect } from 'react-redux';
import PostMessage from './post_message'
import {fetchMessages} from '../actions/messages_actions'

const mapStateToProps = ({ messages }) => ({
  messages: messages.messages
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (homeId) => dispatch(fetchMessages(homeId))
});


class Messages extends React.Component {
  constructor(props) {
		super(props);

  }

  componentWillMount() {
    this.props.fetchMessages(this.props.params.homeId)
  }

  renderMessages() {
    return <div></div>
  }

  render() {
    return (
      <PostMessage />
      )

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
