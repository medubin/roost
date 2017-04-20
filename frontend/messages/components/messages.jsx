import React from 'react';
import { connect } from 'react-redux';
import PostMessage from './post_message'

const mapStateToProps = ({  }) => ({
});

const mapDispatchToProps = dispatch => ({

});


class Messages extends React.Component {
  constructor(props) {
		super(props);

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
