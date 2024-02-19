import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const CategoriesPage = ({ navigation }) => {
  const categories = [
    { id: 1, name: "Living Room", img: require("../assets/living_room.jpg") },
    { id: 2, name: "Bedroom", img: require("../assets/bedroom.jpg") },
    { id: 3, name: "Dining", img: require("../assets/dining.jpg") },
    { id: 4, name: "Decor", img: require("../assets/living_room.jpg") },
    { id: 5, name: "Office", img: require("../assets/living_room.jpg") },
    { id: 6, name: "Appliance", img: require("../assets/living_room.jpg") },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Image source={item.img} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 15,
    backgroundColor: "#1f1f1f",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "flex-start", // Align heading to the left
    color: "#faf3e1",
  },
  categoryItem: {
    backgroundColor: "#faf3e1",
    paddingHorizontal: 8,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 18,
    marginBottom: 8,
  },
  categoryImage: {
    width: 150,
    height: 150,
    marginBottom: 5,
    borderRadius: 13,
    marginTop: 10,
  },
  columnStyle: {
    justifyContent: "space-between",
  },
});

export default CategoriesPage;
