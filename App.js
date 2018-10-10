/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import io from "socket.io-client/dist/socket.io.js";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
var e;
var msg = [];
export default class App extends Component {
  constructor(props) {
    super(props);
    e = this;
    this.socket = io("http://192.168.100.143:3000", {
      jsonp: false,
      name: "Ashutosh"
    });

    this.state = {
      text: "",
      Sevtext: "",
      UserName: "",
      OnlineUser: [],
      Status: 0
    };
    this.socket.on("Server-Send-Text", function(data) {
      e.setState({ Sevtext: data });
    });
    // io.on("connection", (socket, next) => {
    //   const ID = socket.id; // id property on the socket Object
    //   alert("Socket id" + ID);
    // });
    this.socket.on("usernames", function(data) {
      e.setState({ OnlineUser: data });
    });
    this.socket.on("New-Message", function(data) {
      // e.setState({ NewMsg: data });
      msg.push(data);

      e.setState({ Status: 1 });
    });
    this.socket.on("Message", function(message) {
      alert("Message from   :" + message.Messagefrom);
      alert("Message  :" + message.Message);
      // console.warn("Message", message);
    });
  }
  Send = () => {
    this.socket.emit("new-user", this.state.UserName);
    // alert("Sending name" + this.state.UserName);
  };
  SendMessage = () => {
    this.socket.emit("newMessage", this.state.text, this.state.UserName);
  };
  Select = fieldName => text => {
    this.setState({ UserName: fieldName });
  };
  render() {
    var SampleNameArray = [
      "Pankaj",
      "Rita",
      "Mohan",
      "Amit",
      "Babulal",
      "Sakshi"
    ];
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, color: "green", fontSize: 20 }}>
          Total Available Messages
        </Text>
        {msg.length != 0 ? (
          msg.map((data, key) => (
            <Text key={key}>
              {data.from} : {data.msg}
            </Text>
          ))
        ) : (
          <Text />
        )}
        <TextInput
          style={{
            margin: 15,
            height: 40,
            borderWidth: 1,
            width: 320,
            marginLeft: 40
          }}
          underlineColorAndroid="transparent"
          placeholder="Enter UserName"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={UserName => this.setState({ UserName })}
        />
        <TouchableOpacity onPress={this.Send}>
          <Text>Connect</Text>
        </TouchableOpacity>
        <TextInput
          style={{
            margin: 15,
            height: 40,
            borderWidth: 1,
            width: 320,
            marginLeft: 40
          }}
          underlineColorAndroid="transparent"
          placeholder="ShowName"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity onPress={this.SendMessage}>
          <Text>SendMessage</Text>
        </TouchableOpacity>
        <Text>Reply from Server :- {this.state.Sevtext}</Text>
        <View>
          <Text style={{ marginTop: 20, color: "green", fontSize: 20 }}>
            Total Available Users
          </Text>

          {this.state.OnlineUser.length !== 0 ? (
            this.state.OnlineUser.map((data, key) => (
              <Text key={key} onPress={this.Select(data)}>
                {data}
              </Text>
            ))
          ) : (
            <Text />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
