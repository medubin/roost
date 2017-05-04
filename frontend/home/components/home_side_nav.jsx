import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = ({  home }) => ({
  activeHome: home.activeHome
});

const mapDispatchToProps = (dispatch) => ({
  fetchActiveHome: id => dispatch(fetchActiveHome(id)),
});

class HomeSideNav extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="col s12 m4 l3">
        <div className="collection">
          <Link to={'/homes/' + this.props.activeHome.id} className="collection-item avatar">
            <i className="material-icons circle green">home</i>
            <span className="title">{this.props.activeHome.name}</span>
            <p>
              {this.props.activeHome.address}
            </p>
        </Link>
      </div>

      <div className="collection">
        <Link to={'/homes/' + this.props.activeHome.id + '/messages'} className="collection-item avatar">
          <i className="material-icons circle green">message</i>
          <span className="title">Messages</span>
          <p>
            {"put number of unread messages here"}
          </p>
        </Link>
      </div>

      <div className="collection">
        <Link to={'/homes/' + this.props.activeHome.id + '/messages'} className="collection-item avatar">
          <i className="material-icons circle green">payment</i>
          <span className="title">Bills</span>
          <p>
            Pay your bills!
          </p>
        </Link>
      </div>
    </div>
    )
  }

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSideNav)
