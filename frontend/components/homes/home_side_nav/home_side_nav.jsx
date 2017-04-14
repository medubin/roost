import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeSideNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.activeHome)
    return (
      <div className="col s12 m4 l3">
        <div className="collection">
          <a href='#' className="collection-item avatar">
            <i className="material-icons circle green">home</i>
            <span className="title">{this.props.activeHome.name}</span>
            <p>
              {this.props.activeHome.address}
            </p>
        </a>
      </div>

    </div>
    )
  }

}

export default HomeSideNav
