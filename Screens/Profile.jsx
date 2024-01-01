import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const User=useSelector((state)=>state.auth.UserData);
    var a=User.user.name.toUpperCase();
    const navigation=useNavigation();
    
   

    var UserCharacter=a[0].toUpperCase();
    console.log(UserCharacter)
    
  return (
    <ScrollView style={{backgroundColor:"white",padding:10}}>
    <Ionicons
    name="chevron-back"
    size={24}
    color="black"
    style={{ padding: 5 }}
    onPress={() => {
       navigation.navigate("main")
    }}
  />
    <View style={{justifyContent:"center",alignSelf:"center", borderWidth:0.3,width:200, height:170,marginTop:"60%", borderRadius:100,backgroundColor:"#6CB4EE"}}>
      <Text style={{fontSize:45, justifyContent:"center",textAlign:"center",color:"white"}}>{UserCharacter}</Text>
    </View>
    <Text style={{justifyContent:"center",textAlign:"center",marginTop:'10%',fontSize:30,fontWeight:"100",letterSpacing:4}}>{a}</Text>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})