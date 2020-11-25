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
      <Route exact path="/profile" render={() => <Profile  data={props.state.profile}/>} />
      <Route exact path="/dialogs" render={() => <Dialogs data={props.state.dialogs} messages={props.messages}/>} />  
    </div>
    </BrowserRouter>
  );
}

export default App;