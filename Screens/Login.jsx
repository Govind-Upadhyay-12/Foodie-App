import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
  } from "react-native";
  import React from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
//   import { useRouter } from "expo-router";
 import { useNavigation } from "@react-navigation/native";
  import { useState } from "react";
  import axios from "axios";
  import { useDispatch } from "react-redux";
  
  import { useEffect } from "react";
  import { setUserData } from "../components/redux/AuthReducer";
  import { useSelector } from "react-redux";

  
  const login = () => {
    // const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const navigation=useNavigation();
   const dispatch=useDispatch();
   const User=useSelector((state)=>state.auth.UserData);
  if(User){
    navigation.navigate("main");
  }

    const handleLogin = async () => {
      try {
        const response = await axios.post("http://10.0.2.2:3000/signin", {
          email,
          password,
        });
        dispatch(setUserData(response.data));
       console.log(response.data.token);
       navigation.navigate("main")
      } catch (error) {
        console.log(error);
      }
    console.log("hey")
    };
    // useEffect(() => {
    //   const checkToken = async () => {
    //     const take_Token = await AsyncStorage.getItem("token");
    //     if (take_Token) {
    //       router.push("../(home)");
    //     }
    //   };
  
    //   checkToken();
    // }, []);
  
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
            Food App
          </Text>
        </View>
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 12,
                color: "red",
              }}
            >
              Log in to Your account
            </Text>
          </View>
          <View style={{ marginTop: 70 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <MaterialIcons
                name="email"
                size={24}
                color="black"
                style={{ marginLeft: 8, color: "gray" }}
              />
              <TextInput
                style={{ color: "black", marginVertical: 10, width: 300 }}
                placeholder="enter your email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                style={{ color: "black", marginVertical: 10, width: 300 }}
                placeholder="enter your password"
                onChangeText={(text) => {
                  setPassword(text);
                }}
              ></TextInput>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <Text>Keep me Logged In</Text>
            <Text>Forgot Password</Text>
          </View>
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#fd5c63",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
              marginTop: 50,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("signUp")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Don't have an Account? Sign Up
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default login;
  
  const styles = StyleSheet.create({});
  