import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const backImg = require("../assets/back.png");

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onHandleSignUp = () => {
    if (email !== "" && password !== "" && password == confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login Success!"))
        .catch((err) => Alert.alert("Sign up Error", err.message));
    }
  };
  return (
    <View style={styles.container}>
      <Image source={backImg}></Image>
      <View style={styles.whiteSheet}>
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Sign up</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text) => setConfirmPassword(text)}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              margin: 20,
              flexDirection: "row",

              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "orange" }}> Login now</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 20,
  },
  backImg: {
    width: "100%",
    height: 340,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  whiteSheet: {
    height: "75%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
