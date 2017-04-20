import {combineReducers} from 'redux';

import SessionReducer from '../session/reducers/session_reducer';
import UserReducer from '../profile/reducers/user_reducer'
import HomeIndexReducer from '../home_index/reducers/home_index_reducer'
import HomeReducer from '../home/reducers/home_reducer'
import MessagesReducer from '../messages/reducers/messages_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  homeIndex: HomeIndexReducer,
  home: HomeReducer,
  messages: MessagesReducer

});

export default RootReducer;
