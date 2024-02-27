import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { sofaData, bedData } from "../utils/Data.js";

const ProductCard = ({ navigation, item }) => {
  const title = "Example Title";
  const price = "100";
  console.log(sofaData);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("ProductInfo")}
      style={styles.card}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <Text>Demo</Text>
    // Place array mapping code here
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    width: "90%",
    height: 150,
    marginTop: 18,
    marginLeft: 18,
  },
  image: {
    width: "50%",
    height: "90%",
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#666",
  },
});
export default ProductCard;
