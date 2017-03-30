import { connect } from 'react-redux';
import HomesIndex from './homes_index';
import {fetchHomes} from '../../../actions/home_actions'

const mapStateToProps = ({homes} ) => ({
  homes: homes.homes
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomes: () => dispatch(fetchHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomesIndex);
