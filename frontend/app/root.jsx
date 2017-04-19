import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// react components
import App from './app'
import SessionForm from '../session/components/session_form'
import Landing from '../landing/landing'
import HomeForm from '../home_form/components/home_form'
import HomesIndex from '../home_index/components/homes_index'
import HomeShow from '../home/components/home_show'
import Profile from '../profile/components/profile'
import Messages from '../messages/components/messages'
import Home from '../home/home'


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  return (
    <Provider store={store}>
       <Router history={hashHistory}>
         <Route path="/" component={App}>
           <IndexRoute component={Landing} onEnter={_ensureLoggedIn} />
           <Route path="/login" component={SessionForm} onEnter={_redirectIfLoggedIn} />
           <Route path="/signup" component={SessionForm} onEnter={_redirectIfLoggedIn} />
           <Route path="/create-home" component={HomeForm} onEnter={_ensureLoggedIn} />
           <Route path="/homes" component={HomesIndex} onEnter={_ensureLoggedIn} />
           <Route path="/users/:username" component={Profile} onEnter={_ensureLoggedIn} />
           <Route path="/homes/:homeId" component={Home} onEnter={_ensureLoggedIn} >
             <IndexRoute component={HomeShow}/>
             <Route path="/homes/:homeId/messages" component={Messages} onEnter={_ensureLoggedIn} />
           </Route>

         </Route>
       </Router>
     </Provider>
   );


}


export default Root;
