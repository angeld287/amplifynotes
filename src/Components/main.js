// eslint-disable-next-line
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CustomType from './CustomType';
import App from '../App';
/* const currectSession = App.state.currectSession === null;
console.log(App.state.currectSession); */
const Main = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/customtype" component={CustomType} />
  </Switch>
)

export default Main;
