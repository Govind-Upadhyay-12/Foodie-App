import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../components/redux/CartReducer";
import { useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const cart = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();

  console.log(totalPrice);
  const instruction = [
    {
      id: 0,
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: 1,
      name: "Leave at the door",
      iconName: "door-open",
    },
    {
      id: 2,
      name: "direction to reach",
      iconName: "directions",
    },
    {
      id: 3,
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];

  console.log(cart);
  return (
    <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "#F0F8FF" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          style={{ padding: 5 }}
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text style={{ fontWeight: "800", fontSize: 18 }}>{params.name}</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 8,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Text>
          Delievery in <Text style={{ fontWeight: "500" }}>35-40 mins</Text>
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            letterSpacing: 4,
            fontWeight: "200",
            fontSize: 16,
          }}
        >
          ITEM(S) ADDED
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        {cart.map((item, index) => (
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              marginHorizontal: 4,
            }}
          >
            <View key={index} style={{ marginTop: 15, padding: 6 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.name}
              </Text>
              <Text style={{ fontWeight: "500", marginTop: 15 }}>
                ₹ {item.price * item.quantity}{" "}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingRight: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 0.5,
                  width: 80,
                  height: 30,
                  padding: 5,
                  justifyContent: "space-between",
                  borderRadius: 10,
                  marginTop: 7,
                }}
              >
                <Text
                  style={{
                    color: "darkgreen",
                    fontSize: 15,
                    fontWeight: "800",
                  }}
                  onPress={() => {
                    dispatch(decrementQuantity(item));
                  }}
                >
                  −
                </Text>
                <Text
                  style={{
                    color: "darkgreen",
                    fontSize: 15,
                    fontWeight: "800",
                  }}
                >
                  {item.quantity}
                </Text>
                <Text
                  style={{
                    color: "darkgreen",
                    fontSize: 16,
                    fontWeight: "800",
                    marginHorizontal: 5,
                  }}
                  onPress={() => {
                    dispatch(incrementQuantity(item));
                  }}
                >
                  +
                </Text>
              </View>
              <Text style={{ fontWeight: "800", marginTop: 10 }}>
                Qauntity:{item.quantity}
              </Text>
            </View>
          </Pressable>
        ))}
        <Text style={{ padding: 12, fontSize: 16, fontWeight: "800" }}>
          Delievery Instructions
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {instruction.map((item, index) => (
            <Pressable
              style={{
                margin: 10,
                borderRadius: 10,
                padding: 10,
                backgroundColor: "white",
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <FontAwesome5 name={item.iconName} size={22} color={"gray"} />
                <Text
                  style={{
                    width: 75,
                    fontSize: 13,
                    color: "#383838",
                    paddingTop: 10,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <Pressable style={{ marginTop: 25, rowGap: 10 }}>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              gap: 10,
              padding: 3,
            }}
          >
            <Ionicons name="add-circle-outline" size={25} color="black" />
            <Text
              style={{ flex: 1, marginTop: 2, fontSize: 17, fontWeight: "800" }}
            >
              Add more items
            </Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              gap: 14,
              padding: 3,
            }}
          >
            <Foundation name="clipboard-notes" size={25} color="black" />
            <Text
              style={{ flex: 1, marginTop: 2, fontSize: 17, fontWeight: "800" }}
            >
              Add more cookie instruction
            </Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              gap: 10,
              padding: 3,
            }}
          >
            <FontAwesome name="cutlery" size={24} color="black" />
            <Text
              style={{ flex: 1, marginTop: 2, fontSize: 17, fontWeight: "800" }}
            >
              Don't send cultery with this order
            </Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </Pressable>
        <View>
          <View
            style={{
              padding: 10,
              backgroundColor: "white",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Feeding India Donation</Text>
              <AntDesign name="checksquare" size={24} color="#fd5c63" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "gray" }}>
                Working towards a manlutrition-free India
              </Text>
              <Text>Rs 3</Text>
            </View>
          </View>
        </View>
      </View>
      {totalPrice > 0 && (
        <View
          style={{
            backgroundColor: "#fd5c63",
            height: 50,
            borderRadius: 10,
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              paddingTop: "4%",
              fontSize: 18,
              fontWeight: "800",
              color: "white",
            }}
          >
            Total:{totalPrice}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default cart;

const styles = StyleSheet.create({});
