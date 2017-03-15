import { connect } from 'react-redux';
import LandingPage from './landing_page';

const mapStateToProps = ({ }) => ({
});

const mapDispatchToProps = dispatch => ({
  // showHomes: homes => dispatch()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
