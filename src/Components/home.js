import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, {API,graphqlOperation} from 'aws-amplify';
import { readNote, createNote, deleteNote, updateNote} from './GraphQL'
import { withAuthenticator} from 'aws-amplify-react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes App</h1>
        </header>
      </div>
    );
  }
}

export default (Home);