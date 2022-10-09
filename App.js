import axios from "axios";
let qs = require("qs");
import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import APIPack from "./API/csp.json";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import MonglixScreen from "./Components/MonglixScreen";
import Home from "./Components/Home";
import Network from "./Components/Network";


import { NativeBaseProvider } from "native-base";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NetworkCheck from "./Components/NetworkCheck";
import Axioss from "./Components/Listing";
import Listing from "./Components/Listing";
import Form from "./Components/Form/Form";
import DropdownComponent from "./Components/DropdownComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Monglix" component={MonglixScreen} />
      </Tab.Navigator> */}
      <Stack.Navigator>
           <Stack.Screen
          name="Home"
          component={Home}
          headerShown="false"
          options={{
            headerShown: false,
            title: "MAhendra yadav",
            elevation: 0,
            headerStyle: {
              backgroundColor: "#fff",
              position: "absolute",
              height: 50,
              top: 0,
              left: 0,
              right: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
          }}
        /> 
      <Stack.Screen name="Form" component={Form}/>
      <Stack.Screen name="List" component={Listing}/>

      {/* <Stack.Screen
            name="Monglix"
            component={MonglixScreen}
            options={{
              headerShown: false,
            }}
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
