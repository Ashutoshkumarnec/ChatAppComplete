import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Register from "./Register";
import Login from "./Login";

const MyNavigator = createStackNavigator({
  Register: Register,
  Login: Login
});
export default class Main extends Component {
  render() {
    return <MyNavigator />;
  }
}
