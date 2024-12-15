import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "../welcome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function SideNavigation() {
    // return (
    //     // <Drawer.Navigator 
    //     //     initialRouteName="WelcomeScreen"
    //     //     drawerContent={(props) => <CustomDrawerContent {...props} 
    //     //     screenOptions={{
    //     //         drawerActiveTintColor: '#e91e63',
    //     //         drawerInactiveTintColor: '#333333',
    //     //         drawerActiveBackgroundColor: '#ffffff',
    //     //     }}/>}>
            

    //     //     <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
    //     // </Drawer.Navigator>
    // );
}