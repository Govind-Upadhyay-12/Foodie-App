import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeToCart,
} from "./redux/CartReducer";
import { useState } from "react";

const MenuItem = ({ item }) => {
  const [additem, setAddItem] = useState(0);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  return (
    <View>
      <Pressable
        style={{
          marginTop: 10,
          padding: 12,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 12,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginHorizontal: 14,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
            <Text style={{ marginTop: 14, fontWeight: "800" }}>
              ₹{item.price}
            </Text>
            <Text style={{ marginTop: 14 }}>⭐⭐⭐</Text>
          </View>
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ height: 100, width: 120, borderRadius: 12 }}
            />
            {selected ? (
              <Pressable
                style={{
                  backgroundColor: "#fd5c63",
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  alignItems: "center",
                  borderRadius: 5,
                  position: "absolute",
                  top: 75,
                  left: 15,
                  width:100,
                  height:30
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingHorizontal: 6,
                    fontSize: 18,
                  }}
                >
                  {additem}
                </Text>
                <Pressable
                  style={{ flexDirection: "row" }}
                  onPress={() => {
                    setAddItem((c) => c + 1);
                    dispatch(incrementQuantity(item));
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "white",
                      paddingHorizontal: 6,
                      fontSize:22
                    }}
                  >
                    +
                  </Text>
                  <Pressable
                    onPress={() => {
                      if (additem === 1) {
                        dispatch(removeToCart(item));
                        setAddItem(0);
                        setSelected(false);
                        return;
                      }
                      setAddItem((c) => c - 1);
                      dispatch(decrementQuantity(item));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        color: "white",
                        paddingHorizontal: 6,
                        fontSize:22,
                        marginLeft:12,
                        
                      }}
                    >
                      -
                    </Text>
                  </Pressable>
                </Pressable>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setSelected(true);
                  if (additem == 0) {
                    setAddItem((c) => c + 1);
                  }
                  dispatch(addToCart(item));
                }}
              >
                <Text
                  style={{
                    marginTop: -20,
                    position: "absolute",
                    marginLeft: 30,
                    backgroundColor: "white",
                    color: "green",
                    width: 70,
                    height: 30,
                    borderRadius: 5,
                    fontWeight: "800",
                    borderWidth: 1,
                    justifyContent: "center",
                    textAlign: "center",
                    paddingTop: 5,
                  }}
                >
                  ADD
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
