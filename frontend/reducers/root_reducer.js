
import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import HomeReducer from './home_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  home: HomeReducer

});

export default RootReducer;
