import { connect } from 'react-redux';
import HomeShow from './home_show';
import {fetchActiveHome} from '../../../actions/home_actions'
// import {createHome} from '../../../actions/home_actions'

const mapStateToProps = ({ homes }) => ({
  // errors: homes
  activeHome: homes.activeHome
});

const mapDispatchToProps = (dispatch) => ({
    fetchActiveHome: id => dispatch(fetchActiveHome(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow);
