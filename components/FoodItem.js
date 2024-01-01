import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import MenuItem from './MenuItem';

const FoodItem = ({ item }) => {
  const data = [item];
  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Pressable
            style={{
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{fontSize:17, fontWeight:"800", paddingLeft:10, marginTop:12}}>
              {item?.name} ({item?.items.length})
            </Text>
            <AntDesign name="down" size={20} color="black" />
          </Pressable>
          {item?.items.map((item, index) => (
             <MenuItem key={index} item={item}> </MenuItem>
          ))}
        </View>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
