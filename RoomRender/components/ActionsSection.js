import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../utils/colors";

const Card = ({ title, illustration, backgroundColor }) => {
  return (
    <View style={[actionSectionStyles.card, { backgroundColor }]}>
      <View style={actionSectionStyles.cardContent}>
        <Image source={illustration} style={actionSectionStyles.illustration} />
        <Text style={actionSectionStyles.title}>{title}</Text>
      </View>
    </View>
  );
};

const ActionsSection = () => {
  return (
    <View>
      <Text style={actionSectionStyles.quickStart}>Quick Start:</Text>
      <View style={actionSectionStyles.container}>
        <Card
          title="Launch AR Camera"
          illustration={require("../assets/ARcard.png")}
          backgroundColor={colors.cream}
        />
        <Card
          title="Browse collections"
          illustration={require("../assets/BrowseCard.png")}
          backgroundColor={colors.orange}
        />
        <Card
          title="Your Favourites"
          illustration={require("../assets/FavouritesCard.png")}
          backgroundColor={colors.lilac}
        />
        <Card
          title="Contact Us"
          illustration={require("../assets/ContactUsCard.png")}
          backgroundColor={colors.blue}
        />
      </View>
    </View>
  );
};

const actionSectionStyles = StyleSheet.create({
  quickStart: {
    color: colors.cream,
    fontSize: 20,
    padding: 10,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // Adjust as needed
    marginBottom: 20, // Adjust as needed
    borderRadius: 20,
    elevation: 3,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5, // Adjust as needed
    textAlign: "center",
  },
  illustration: {
    width: 140,
    height: 80,
    marginBottom: 5, // Adjust as needed
    borderRadius: 8,
  },
});

export default ActionsSection;
