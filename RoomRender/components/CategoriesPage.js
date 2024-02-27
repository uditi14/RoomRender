import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { Searchbar } from "react-native-paper";
import colors from "../utils/colors";

const CategoriesPage = ({ navigation }) => {
  const categories = [
    { id: 1, name: "Living Room", img: require("../assets/living_room.jpg") },
    { id: 2, name: "Bedroom", img: require("../assets/bedroom.jpg") },
    { id: 3, name: "Dining", img: require("../assets/dining.jpg") },
    { id: 4, name: "Decor", img: require("../assets/decor.jpg") },
    { id: 5, name: "Office", img: require("../assets/office.jpg") },
    { id: 6, name: "Appliance", img: require("../assets/appliance.jpg") },
  ];
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ marginTop: 30 }}
      />
      <Text style={styles.heading}>Categories</Text>
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("Catalog");
                console.log(item.name);
              }}
              style={styles.categoryItem}
            >
              <Image source={item.img} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnStyle}
          scrollEnabled
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 15,
    backgroundColor: colors.bg,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center", // Align heading to the left
    color: colors.cream,
  },
  categoryItem: {
    width: "46%",
    backgroundColor: colors.cream,
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
    width: "98%",
    height: 150,
    marginBottom: 5,
    borderRadius: 13,
    marginTop: 10,
  },
  columnStyle: {
    justifyContent: "space-around",
  },
});

export default CategoriesPage;
