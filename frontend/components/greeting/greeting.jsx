import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(this.props.currentUser) {
      return (
        <hgroup className="header-group">
          <h2 className="header-item">Roost</h2>
          <h2 className="header-item">Hi, {this.props.currentUser.username}!</h2>
          <button className="header-item" onClick={this.props.logout}>Log Out</button>
  	     </hgroup>
       )
     } else {
       return (
         <hgroup className="header-group">
           <h2 className="header-item">Roost</h2>
           <Link to="/login"  activeClassName= 'current' className="header-item">Login</Link>
           <Link to="/signup" activeClassName= 'current' className="header-item">Sign up!</Link>
         </hgroup>
       )
     }

  }
}

export default Greeting;
