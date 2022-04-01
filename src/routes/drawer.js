import * as React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from './homeStack';
import AboutStack from './AboutStack';
import RouteNames from './../utils/routeNames';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function MyDrawer(){

    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name={RouteNames.homeStack} component={HomeStack} options={{swipeEnabled:false,gestureEnabled:false} }/>
            <Drawer.Screen name={RouteNames.aboutStack} component={AboutStack}/>
        </Drawer.Navigator>
    )
}