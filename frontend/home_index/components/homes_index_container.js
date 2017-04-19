import { connect } from 'react-redux';
import HomesIndex from './homes_index';
import {fetchHomes} from '../actions/home_index_actions';

const mapStateToProps = ( {homeIndex} ) => ({
  homes: homeIndex.homes
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomes: () => dispatch(fetchHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomesIndex);
