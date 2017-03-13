import { connect } from 'react-redux';
import HomeForm from './home_form';
import {createHome} from '../../actions/home_actions'

const mapStateToProps = ({ home }) => ({
  errors: home.errors
});

const mapDispatchToProps = (dispatch) => ({
    createHome: home => dispatch(createHome(home))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeForm);
