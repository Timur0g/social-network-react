import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className="app">    
      <Header />
      <Route exact path="/profile" render={() => <ProfileContainer />} />
      <Route exact path="/dialogs" render={() => <DialogsContainer />} />  
    </div>
    </BrowserRouter>
  );
}

export default App;