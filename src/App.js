import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

const App = (props) => {
console.log(props.store.getState());

  return (
    <BrowserRouter>
    <div className="app">    
      <Header />
      <Route exact path="/profile" render={() => <Profile  profile={props.store.getState().profile} dispatch={props.store.dispatch}/>} />
      <Route exact path="/dialogs" render={() => <Dialogs dialogs={props.store.getState().dialogs} dispatch={props.store.dispatch}/>} />  
    </div>
    </BrowserRouter>
  );
}

export default App;