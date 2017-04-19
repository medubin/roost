import { connect } from 'react-redux';
import HomeForm from './home_form';
import {createHome} from '../actions/home_form_actions'

const mapStateToProps = ({ }) => ({
  errors: [] //TODO
});

const mapDispatchToProps = (dispatch) => ({
    createHome: home => dispatch(createHome(home))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeForm);
