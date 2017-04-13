import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault()

    this.props.logout()
    window.location.reload()

  }

  render() {
    if(this.props.currentUser) {
      let username = this.props.currentUser.username;
      return (
        <nav>
          <div className="nav-wrapper">
            <h2 className="brand-logo">Roost</h2>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to={'/users/' + username} className="header-item">{username}!</Link></li>
              <li><Link to="/login" className="header-item" onClick={this.logout}>log out</Link></li>
            </ul>
  	       </div>
        </nav>
       )
     } else {
       return (
         <nav>
           <div className="nav-wrapper">
             <h2 className="brand-logo">Roost</h2>
             <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><Link to="/login"  activeClassName= 'current' className="header-item">Login</Link></li>
               <li><Link to="/signup" activeClassName= 'current' className="header-item">Sign up!</Link></li>
             </ul>
           </div>
         </nav>
       )
     }

  }
}

export default Greeting;
