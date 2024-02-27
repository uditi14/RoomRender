import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductCard = () => {
  // Hardcoded values
  const title = "Example Title";
  const price = "100";

  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/living_room.jpg")}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
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
