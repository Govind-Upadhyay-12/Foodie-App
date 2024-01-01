import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const Explore = () => {
  const data = [
    {
      id: "0",
      name: "Offers",
      description: "Upto 50% off",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Legends",
      description: "Across India",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gourmet",
      description: "Selections",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Healthy",
      description: "Curated dishes",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: "white",  padding:5, marginHorizontal:10, borderRadius:10, width:110, height:125, marginTop:15}}>
            <View>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={{textAlign:"center", alignSelf:"center", fontWeight:"500"}} >{item.name}</Text>
              <Text style={{textAlign:"center", alignSelf:"center",fontWeight:"200"}}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 80,
    borderRadius: 8,
  },
});

export default Explore;
