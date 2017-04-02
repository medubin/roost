import { connect } from 'react-redux';
import LandingPage from './landing_page';

const mapStateToProps = ({ session }) => ({
  defaultHomeId: session.currentUser.default_home_id
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
