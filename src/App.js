import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify, {API,graphqlOperation} from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react'; 
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
import Main from './Components/main';
import Notes from './Components/notes';
import { BrowserRouter } from 'react-router-dom';

Amplify.configure({
  Auth: {
      region: 'us-east-1',
      identityPoolRegion: 'us-east-1',
      userPoolId: 'us-east-1_TjXHaPuvU',
      userPoolWebClientId: 'pv7lcbb0sv0s5fcjiahrahef1',
      mandatorySignIn: false,
  }
});

let myAppConfig = {
  // ...
  'aws_appsync_graphqlEndpoint': 'https://i6lb57ozbfb4tcqjsq4nshvrcy.appsync-api.us-east-1.amazonaws.com/graphql',
  'aws_appsync_region': 'us-east-1',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
  // ...
}

Amplify.configure(myAppConfig);


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
            <div className="App">
               <Notes/>
               <Main/>
            </div>
      </BrowserRouter>
    );
  }
}
export default withAuthenticator(App, { includeGreetings: true });