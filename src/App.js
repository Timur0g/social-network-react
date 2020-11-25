import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
const data = ['hello', 'hellow2']
const App = () => {
  return (
    <BrowserRouter>
    <div className="app">    
      <Header />
      <Route exact path="/profile" render={() => <Profile />} />
      <Route exact path="/dialogs" render={() => <Dialogs />} />  
    </div>
    </BrowserRouter>
  );
}

export default App;