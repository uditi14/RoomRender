import React from "react";
import { View, Text, StyleSheet, Image,BackHandler, Pressable } from "react-native";
import colors from "../utils/colors";
import {Camera} from 'expo-camera'

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
  const [startCamera,setStartCamera] = React.useState(false)
  let camera= Camera;
  React.useEffect(() => {
    const backAction = () => {
      if (startCamera) {
        setStartCamera(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [startCamera]);
  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }
  return (
    <>
    {startCamera ? (
      <Camera
        style={{flex: 1,width:"100%"}}
        ref={(r) => {
          camera = r
        }}
      ></Camera>
    ) : (
      <View>
      <Text style={actionSectionStyles.quickStart}>Quick Start:</Text>
      <View style={actionSectionStyles.container}>
        <Pressable
        onPress={__startCamera}
        >
          <Card
            title="Launch AR Camera"
            illustration={require("../assets/ARcard.png")}
            backgroundColor={colors.cream}
          />
        </Pressable>
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
    )}
    </>
  );
};

const actionSectionStyles = StyleSheet.create({
  quickStart: {
    color: colors.cream,
    fontSize: 20,
    padding: 10,
  },
  container: {
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "2rem", 
    marginBottom: 20, 
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
