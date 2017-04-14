import { connect } from 'react-redux';
import HomeSideNav from './home_side_nav';


const mapStateToProps = ({  homes }) => ({
  activeHome: homes.activeHome
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSideNav);
