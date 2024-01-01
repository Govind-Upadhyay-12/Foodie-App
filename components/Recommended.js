import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

const Recommended = () => {
  const recommended = [
    {
      id: 0,
      name: "Nandhana Palace",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/50713/81d0735ce259a6bf800e16bb54cb9e5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "35 - 45",
      type: "Andhra",
    },
    {
      id: 1,
      name: "GFC Biriyani",
      image:
        "https://b.zmtcdn.com/data/pictures/0/20844770/f9582144619b80d30566f497a02e2c8d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      time: "10 - 35",
      type: "North Indian",
    },
    {
      id: 2,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },
    // Add other items as needed
  ];

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recommended}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 5 }}>
            <View style={{flexDirection:'row', backgroundColor:"white", marginHorizontal:5, padding:10, borderRadius:10}}>

              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={{padding:10}}>
              <Text style={{fontSize:17, fontWeight:"500"}}>{item.name}</Text>
              <Text style={{fontSize:15, fontWeight:"200"}}>{item.type}</Text>
              <View style={{flexDirection:'row', gap:10 ,marginTop:10}}>
              <AntDesign name="clockcircle" size={24} color="green" />
              <Text style={{fontSize:15, fontWeight:"500", marginTop:2 }}>{item.time} mins</Text>
               

              </View>

              </View>

            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150, // Set the width of the image as per your design
    height: 100, // Set the height of the image as per your design
    borderRadius: 8,
  },
});

export default Recommended;
