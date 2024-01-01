import {
    Alert,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import * as Location from "expo-location";
  import * as LocationGeoCoding from "expo-location";
  import { EvilIcons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import Carousel from "../components/Carousel";
  import Categories from "../components/Categories";
  import Recommended from "../components/Recommended";
  import Explore from "../components/Explore";
  import Hotel from "../components/Hotel";
  import { useSelector } from "react-redux";
  import { useNavigation } from "@react-navigation/native";
  
  const Index = () => {
    const navigation=useNavigation();
    const User=useSelector((state)=>state.auth.UserData);
    console.log(User);
    const [locationEnabled, setLocationEnabled] = useState(false);
    const [displayCurrentAddress, setAddress] = useState(
      "fetching your location..."
    ); 
  
    useEffect(() => {
      checkIfLocationEnabled();
      getCurrentLocation();
    }, []);
  
    const checkIfLocationEnabled = async () => {
      let enabled = await Location.hasServicesEnabledAsync();
      console.log(enabled);
      if (!enabled) {
        Alert.alert(
          "Location Service is not enabled",
          "Please enable it to continue",
          [{ text: "OK" }],
          { cancelable: false }
        );
      } else {
        setLocationEnabled(true);
      }
    };
  
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        Alert.alert(
          "Permission not granted",
          "Please enable location permissions",
          [{ text: "OK" }],
          { cancelable: false }
        );
      } else {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
       
  
        let { coords } = location;
        if (coords) {
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          });
          // console.log(response)
          const address = await LocationGeoCoding.reverseGeocodeAsync({
            latitude,
            longitude,
          });
          console.log(address);
          const streetAddress = address[0];
          console.log(streetAddress);
          var realAddress = "";
          realAddress += streetAddress.city;
          realAddress += " " + streetAddress.district;
  
          setAddress(realAddress);
        }
      }
    };
  
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            padding: 10,
          }}
        >
          <EvilIcons name="location" size={24} color="#E52850" />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliever To</Text>
            <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>
              {displayCurrentAddress}
            </Text>
          </View>
  
          <Pressable
            style={{
              backgroundColor: "#6CB4EE",
              width: 40,
              height: 40,
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={()=>{
           navigation.navigate("profile")
            }}
          >
          
            <Text>G</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#C0C0C0",
            paddingVertical:8,
            paddingHorizontal:10,
            marginHorizontal:10,  
            borderRadius:11,
            marginTop:10
          }}
        >
          <TextInput placeholder="Search for Food" />
          <FontAwesome name="search" size={24} color="#E52B50" />
        </View>
        <Carousel/>
        <Categories/>
        <Recommended/>
        <Text style={{alignSelf:"center", textAlign:"center", marginTop:13, letterSpacing:5, fontWeight:"300"}}>EXPLORE</Text>
        <Explore/>
        <Text style={{alignSelf:"center", textAlign:"center", marginTop:13, letterSpacing:5, fontWeight:"300"}}>ALL RESTAURANT</Text>
        <Hotel/>
      
      </ScrollView>
      
    );
  };
  
  export default Index;
  
  const styles = StyleSheet.create({});
  