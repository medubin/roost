import React from 'react';
import { Link, withRouter } from 'react-router';
import Field from './_field'

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", passwordCheck: "", errors: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.handleFrontEndErrors()) {
			return;
		}
		const user = this.state;
		this.props.processForm({user});
	}

	handleFrontEndErrors() {
		let errors = [];
		if (this.state.password.length < 6) {
			errors.push("The Password must be at least 6 characters long.");
		}
		if (this.props.formType === "signup" && this.state.password !== this.state.passwordCheck) {
			errors.push("Passwords don't match.");
		}

		this.setState({errors: errors});

		return errors.length != 0;
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.concat(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let signUpOptions;
		if (this.props.formType === 'signup') {
			signUpOptions =
			<div className="login-form">
				<label> Retype Password:
					<Field type='password' field='passwordCheck' value={this.state.passwordCheck} update={this.update.bind(this)}/>
				</label>
			</div>
		}

		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to Roost!
					<br/>
					Please {this.props.formType} or {this.navLink()}
					{this.renderErrors()}

					<div className="login-form">
						<label> Username:
							<Field type='text' field='username' value={this.state.username} update={this.update.bind(this)}/>
						</label>
					</div>

					<div className="login-form">
						<label> Password:
							<Field type='password' field='password' value={this.state.password} update={this.update.bind(this)}/>
						</label>
					</div>

					{ signUpOptions }
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
