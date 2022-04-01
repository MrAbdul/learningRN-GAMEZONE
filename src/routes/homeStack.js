import React, { useEffect } from 'react';
import { View, StyleSheet, Text ,Image} from 'react-native'
import Home from '../screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from '../screens/reviewDetails';
import { HeaderLeft } from './../utils/helperFunctions';
import RouteNames from './../utils/routeNames';


const Stack = createNativeStackNavigator();

export default function HomeStack(props) {

  const { navigation } = props;
 
  return (

    <Stack.Navigator initialRouteName='Home' screenOptions={{ 
      headerStyle: { backgroundColor: '#eee',   },
      headerTitleStyle: { fontWeight: 'bold', }, headerTintColor: '#444', headerTitleAlign:'center', 
    }} >
      <Stack.Screen name={RouteNames.home}
        component={Home}
        options={{transitionSpecs:{open:TransitionSpecs.forModalPresentationIOS,close:TransitionSpecs.forModalPresentationIOS}, title: "GameZone", headerLeft: HeaderLeft(navigation)}} />
      <Stack.Screen name={RouteNames.ReviewDetails}
        component={ReviewDetails}
        options={{transitionSpecs:{open:config,close:config}, title: "Review Details",swipeEnabled:false,gestureEnabled:false}}   />

    </Stack.Navigator>


  );
};

const styles = StyleSheet.create({

});


