import { connect } from 'react-redux';
import HomeShow from './home_show';
// import {createHome} from '../../../actions/home_actions'

const mapStateToProps = ({ homes }) => ({
  // errors: homes.errors
});

const mapDispatchToProps = (dispatch) => ({
    // createHome: home => dispatch(createHome(home))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
