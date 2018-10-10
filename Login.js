import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Item,
  Label,
  Input,
  InputGroup,
  Left,
  Right,
  Button
} from "native-base";
class Login extends Component {
  //   static navigationOptions = {
  //     headerTitle: "Login"
  //   };
  render() {
    return (
      <View>
        <ImageBackground
          source={require("./images/chatWallpaper.jpg")}
          style={styles.backgroundImage}
        >
          <View style={{ flexDirection: "column", marginTop: 120 }}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="black"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="black"
              autoCapitalize="none"
            />
            {/*<Button block success style={{ marginRight: 40, marginLeft: 40 }}>
              <Text>SignUp</Text>
    </Button>*/}
            <TouchableOpacity>
              <Image
                source={require("./images/login1.png")}
                style={{
                  width: 180,
                  height: 80,
                  marginLeft: 100,
                  marginTop: 20
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  backgroundImage: {
    width: 400,
    height: 590
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    width: 320,
    marginLeft: 40
  }
});
