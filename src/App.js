import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className="app">    
      <Header />
      <Route path="/profile/:userProfile?" render={() => <ProfileContainer />} />
      <Route exact path="/dialogs" render={() => <DialogsContainer />} />
      <Route exact path="/users" render={() => <UsersContainer />} /> 

    </div>
    </BrowserRouter>
  );
}

export default App;