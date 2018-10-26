import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// amplify config
import Amplify from "aws-amplify";
import * as aws_amplify_react from "aws-amplify-react";
import amplifyCustomUi from "aws-amplify-react-custom-ui";
//TODO : PLEASE PROVIDE THE aws-exports file :)
//import awsconfig from "./aws-exports";
//Amplify.configure(awsconfig);
amplifyCustomUi.configure(aws_amplify_react);

ReactDOM.render(<App />, document.getElementById("root"));
