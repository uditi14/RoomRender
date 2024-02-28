import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import AllData from "../utils/Data";
const ProductCard = ({ route, navigation }) => {
  const category = route.params.category;
  const formattedCategory = category.replace(/\s+/g, "").toLowerCase();
  let DataToDisplay = [];
  DataToDisplay = AllData[formattedCategory];
  const RenderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("ProductInfo", { item })}
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
    <ScrollView>
      {DataToDisplay.map((item) => (
        <RenderItem key={item.id} item={item} />
      ))}
    </ScrollView>
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
    resizeMode: "contain",
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
