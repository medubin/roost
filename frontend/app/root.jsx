import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// react components
import App from './app'
import SessionFormContainer from '../session/components/session_form_container'
import LandingContainer from '../landing/landing_container'
import HomeFormContainer from '../home_form/components/home_form_container'
import HomesIndexContainer from '../home_index/components/homes_index_container'
import HomeShowContainer from '../home/components/home_show_container'
import ProfileContainer from '../profile/components/profile_container'
import Messages from '../messages/components/messages_container'


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
           <IndexRoute component={LandingContainer} onEnter={_ensureLoggedIn} />
           <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/create-home" component={HomeFormContainer} onEnter={_ensureLoggedIn} />
           <Route path="/homes" component={HomesIndexContainer} onEnter={_ensureLoggedIn} />
           <Route path="/users/:username" component={ProfileContainer} onEnter={_ensureLoggedIn} />
           <Route path="/homes/:homeId" component={HomeShowContainer} onEnter={_ensureLoggedIn} />
           <Route path="/homes/:homeId/messages" component={Messages} onEnter={_ensureLoggedIn} />

         </Route>
       </Router>
     </Provider>
   );


}


export default Root;
