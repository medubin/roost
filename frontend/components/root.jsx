import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// react components
import App from './app'
import SessionFormContainer from './session_form/session_form_container'
import LandingPageContainer from './landing_page/landing_page_container'
import HomeFormContainer from './homes/home_form/home_form_container'
import HomesIndexContainer from './homes/homes_index/homes_index_container'
import HomeShowContainer from './homes/home_show/home_show_container'
import ProfileContainer from './profile/profile_container'


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
           <IndexRoute component={LandingPageContainer} onEnter={_ensureLoggedIn} />
           <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
           <Route path="/create-home" component={HomeFormContainer} onEnter={_ensureLoggedIn} />
           <Route path="/homes" component={HomesIndexContainer} onEnter={_ensureLoggedIn} />
           <Route path="/users/:username" component={ProfileContainer} onEnter={_ensureLoggedIn} />
           <Route path="/homes/:homeId" component={HomeShowContainer} onEnter={_ensureLoggedIn} />

         </Route>
       </Router>
     </Provider>
   );


}


export default Root;
