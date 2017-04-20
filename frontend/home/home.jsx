import React from 'react';
import { Link, withRouter } from 'react-router';
import HomeSideNav from './components/home_side_nav';
import { fetchActiveHome } from './actions/home_actions'
import { connect } from 'react-redux';


const mapStateToProps = ({  }) => ({
})

const mapDispatchToProps = (dispatch) => ({
    fetchActiveHome: id => dispatch(fetchActiveHome(id)),
})


class Home extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.fetchActiveHome(this.props.params.homeId)
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchActiveHome(nextProps.params.homeId)
  }


  render() {
    return (
      <div className="row">
        <HomeSideNav />
        {this.props.children}
      </div>
  )
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
