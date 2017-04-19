import { connect } from 'react-redux';
import HomeShow from './home_show';
import {fetchActiveHome, joinHome} from '../actions/home_actions';


const mapStateToProps = ({ home }) => ({
  // errors: homes
  activeHome: home.activeHome,
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
