import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app">    
      <Header />
      <Route exact path="/profile" render={() => <Profile  state={props.state}/>} />
      <Route exact path="/dialogs" render={() => <Dialogs state={props.state}/>} />  
    </div>
    </BrowserRouter>
  );
}

export default App;