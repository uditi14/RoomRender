import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesPage from "../components/CategoriesPage";
import ProductCard from "../components/productCard";
import ProductInfo from "../screens/ProductInfo";

const Stack = createNativeStackNavigator();

export default function ComponentStack() {
  return (
    <Stack.Navigator initialRouteName="CategoriesPage">
      <Stack.Screen
        name="CategoriesPage"
        component={CategoriesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Catalog"
        component={ProductCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
