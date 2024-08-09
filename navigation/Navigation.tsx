import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import Previous from "../previous/Previous";
import Next from "../next/Next";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [param, setParam] = useState(1);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Previous") {
            iconName = focused ? "arrow-left" : "arrow-left-outline";
          } else if (route.name === "Next") {
            iconName = focused ? "arrow-right" : "arrow-right-outline";
          }
          return <Ionicons size={12} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#262626", borderColor: "#262626" },
      })}
    >
      <Tab.Screen
        name="Previous"
        component={Previous}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="arrow-back-circle" color={color} size={size} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            param > 2 && setParam((count) => count - 1);
            navigation.setParams({ updatedParam: param });
            console.log(param, route.name);
          },
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Next"
        component={Next}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="arrow-forward-circle" color={color} size={size} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            param < 80 && setParam((count) => count + 1);
            navigation.setParams({ updatedParam: param });
            console.log(param, route.name);
          },
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
