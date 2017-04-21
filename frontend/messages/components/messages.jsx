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
    let messages = []

    for(let key in this.props.messages) {
      messages.push(
        <li className='collection-item col s8' key={key}>
          <div className='col s2'>
            {this.props.messages[key]['user']}
          </div>
          <div className='col s6'>
            {this.props.messages[key]['message']}
          </div>
        </li>
      )
    }

    return messages
  }

  render() {
    return (
      <div>
        <ul className="collection col s8">
          {this.renderMessages()}
        </ul>
          <PostMessage />
      </div>
    )

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
