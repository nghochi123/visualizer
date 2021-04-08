import './App.css';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import GlobalContextProvider from './context/GlobalContextProvider';

import Home from './containers/Home/Home';

function App() {
  return (
    <GlobalContextProvider>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect to="/"></Redirect>
      </Switch>
    </GlobalContextProvider>
  );
}

export default App;
