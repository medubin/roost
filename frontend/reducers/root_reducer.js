import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import HomeReducer from './home_reducer'
import UserReducer from './user_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  homes: HomeReducer,
  user: UserReducer,

});

export default RootReducer;
