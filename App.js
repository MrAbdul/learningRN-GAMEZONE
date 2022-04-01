import React from 'react';

import 'react-native-gesture-handler';

import { View, StyleSheet } from 'react-native'
import Home from './src/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from './src/screens/reviewDetails';
import HomeStack from './src/routes/homeStack';
import MyDrawer from './src/routes/drawer';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <MyDrawer/>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});
