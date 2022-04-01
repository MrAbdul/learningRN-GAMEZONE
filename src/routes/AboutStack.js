import React from 'react';
import { View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';
import { HeaderLeft } from './../utils/helperFunctions';
import RouteNames from './../utils/routeNames';

const Stack = createNativeStackNavigator();

export default function AboutStack(props) {
  const { navigation } = props;

  return (
   
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: '#eee', },
       headerTitleStyle:{fontWeight:'bold'},headerTintColor:'#444',headerTitleAlign:'center',}} >
        <Stack.Screen name={RouteNames.about}
          component={About} 
          options={{ title: "About",  headerLeft: HeaderLeft(navigation) }} />
        </Stack.Navigator>


  );
};

const styles = StyleSheet.create({

});
