import React from 'react';
import { connect } from 'react-redux';

import {createMessage} from '../actions/messages_actions'


const mapStateToProps = ({ home }) => ({
  homeId: home.activeHome.id
});

const mapDispatchToProps = dispatch => ({
  createMessage: (homeId, message) => dispatch(createMessage(homeId, message))
});


class PostMessage extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      message: ''
    }
    this.update = this.update.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  update(e) {
    this.setState({
      message: e.currentTarget.value
    })
  }

  submitMessage(e) {
    e.preventDefault()
    if (!this.state.message) {
      return
    }
    this.props.createMessage(this.props.homeId, this.state.message)
    this.setState({
      message: ''
    })


  }

  render() {
    return (
      <div className="row">
        <form className="col s12 m8 l9">
          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea col s11" value={this.state.message} onChange={this.update}></textarea>
              <input type="submit" onClick={this.submitMessage} value="post" className="btn waves-effect waves-light col s1" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMessage);
