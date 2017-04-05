import { connect } from 'react-redux';
import Profile from './profile';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = ({ user }) => ({
  user: user.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
