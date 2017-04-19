import React from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'
import {fetchHomes} from '../actions/home_index_actions'

const mapStateToProps = ( {homeIndex} ) => ({
  homes: homeIndex.homes
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomes: () => dispatch(fetchHomes())
});

class HomesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }

  componentWillMount() {
    this.props.fetchHomes();
  }


  renderHomes() {
    let homes = [];
    for(let key in this.props.homes) {
      homes.push(
        <li key={key}>
          <Link to={ `/homes/${this.props.homes[key].id}`} className="collection-item" >
            {this.props.homes[key].name}
          </Link>
        </li>
      );
    }

    return <ul className="collection">{homes}</ul>
  }


  render() {

    return <div>
      {this.renderHomes()}
    </div>
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomesIndex);
