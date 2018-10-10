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
class Register extends Component {
  static navigationOptions = {
    headerTitle: "Register"
  };
  render() {
    return (
      <View>
        <ImageBackground
          source={require("./images/chatWallpaper.jpg")}
          style={styles.backgroundImage}
        >
          <View style={{ flexDirection: "column", marginTop: 60 }}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="UserName"
              placeholderTextColor="black"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="FirstName"
              placeholderTextColor="black"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="LastName"
              placeholderTextColor="black"
              autoCapitalize="none"
            />
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
            <TouchableOpacity
              style={{ width: 250, marginLeft: 70 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Image
                source={require("./images/Registerbuton.png")}
                style={{
                  width: 250,
                  height: 70,
                  marginLeft: 10,
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
export default Register;
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
