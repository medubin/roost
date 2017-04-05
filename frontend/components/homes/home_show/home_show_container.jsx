import { connect } from 'react-redux';
import HomeShow from './home_show';
import {fetchActiveHome} from '../../../actions/home_actions';
import {joinHome} from '../../../actions/home_actions'

const mapStateToProps = ({ homes }) => ({
  // errors: homes
  activeHome: homes.activeHome,
  // currentUserUsername: session.currentUser.username
});

const mapDispatchToProps = (dispatch) => ({
    fetchActiveHome: id => dispatch(fetchActiveHome(id)),
    joinHome: homeId => dispatch(joinHome(homeId))


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
