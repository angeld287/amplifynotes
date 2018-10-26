import React, { Component } from "react";
import SignIn from "./SignIn";
import amplifyCustomUi from "aws-amplify-react-custom-ui";
import SecureApp from "./SecureApp";

class App extends Component {
  componentWillMount() {
    amplifyCustomUi.setSignIn(SignIn);
  }

  render() {
    return <SecureApp />;
  }
}

export default App;
