import * as React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomePage from "../screens/HomePage";
import CategoriesPage from "../components/CategoriesPage";
import ARCam from "../screens/ARCam";
import List from "../screens/List";
import ProductInfo from "../screens/ProductInfo";
import ProductCard from "../components/productCard";
import Login from "../screens/Login";
import ComponentStack from "./ComponentStack";
import colors from "../utils/colors";

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: colors.bg },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomePage") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "CategoryStack") {
              iconName = focused ? "search-sharp" : "search-outline";
            } else if (route.name === "AR") {
              iconName = focused ? "camera-sharp" : "camera-outline";
            } else if (route.name === "List") {
              iconName = focused ? "heart-sharp" : "heart-outline";
            } else if (route.name === "Login") {
              iconName = focused
                ? "person-circle-sharp"
                : "person-circle-outline";
            }
            const iconColor = focused ? colors.orange : colors.cream;
            return <Ionicons name={iconName} size={24} color={iconColor} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            if (route.name === "HomePage") {
              label = "Home";
            } else if (route.name === "CategoryStack") {
              label = "Browse";
            } else if (route.name === "AR") {
              label = "AR";
            } else if (route.name === "List") {
              label = "My List";
            } else if (route.name === "Login") {
              label = "Profile";
            }
            const labelColor = focused ? colors.orange : colors.cream;
            return <Text style={{ color: labelColor }}>{label}</Text>;
          },
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: colors.cream,
          showLabel: true,
          showIcon: true,
        })}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="CategoryStack"
          component={ComponentStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="AR" component={ARCam} options={{ headerShown: false, unmountOnBlur: true }} />
        <Tab.Screen
          name="List"
          component={List}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default RootNavigator;
