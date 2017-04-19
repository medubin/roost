import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import {createHome} from '../actions/home_form_actions'

const mapStateToProps = ({ }) => ({
  errors: [] //TODO
});

const mapDispatchToProps = (dispatch) => ({
    createHome: home => dispatch(createHome(home))
});

class HomeForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      address: "",
    };
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }


	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    const home = this.state;
    this.props.createHome({home})
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div>
      <h2>Create New Home</h2>
      <form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <div>
          <label> Name of Home
            <input type='text' field='name' value={this.state.name} onChange={this.update('name')} />
          </label>
        </div>

        <div>
          <label> Address
            <input type='text' field='address' value={this.state.address} onChange={this.update('address')} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeForm);
