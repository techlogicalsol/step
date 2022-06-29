import React from 'react';
import './App.css';

import Nav from './Components/Nav';


import {Switch, Route, Redirect} from 'react-router-dom';


import Home from './Components/Home'
import Men from './Components/Men';
import Women from './Components/Women';
import NewArrival from './Components/NewArrival';
import Cart from './Components/Cart';


import {Provider} from 'react-redux';
import store from './Store';
import DetailM from './Components/DetailM';
import DetailW from './Components/DetailW';
import DetailA from './Components/DetailA';


function App() {
  return (
    <div>
      <Provider store={store}>

      <Nav />
      <Switch>
      
      <Route exact path="/" component={Home} />

      <Route exact path="/men" component={Men} />
      <Route exact path="/detailM/:id" component={DetailM} />

      <Route exact path="/women" component={Women} />
      <Route exact path="/detailW/:id" component={DetailW} />

      <Route exact path="/newarrival" component={NewArrival} />
      <Route exact path="/detailA/:id" component={DetailA} />
      <Route exact path="/cart" component={Cart} />

      <Redirect to="/" />
      </Switch>
      </Provider>
    </div>
  );
}

export default App;
