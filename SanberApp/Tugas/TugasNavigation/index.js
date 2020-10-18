import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import LoginScreen from './LoginScreen'
import AboutScreen from './AboutScreen'
import SkillScreen from './App'
import AddScreen from './AddScreen'
import ProjectScreen from './Project.Screen'
import { ScreenContainer } from "react-native-screens";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const index = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MyDrawwer" component={MyDrawwer} />
                <Stack.Screen name='MainApp' component={MainApp} />
                <Stack.Screen name='About' component={AboutScreen} />
                <Stack.Screen name="Skill" component={SkillScreen} />
                <Stack.Screen name="Add Screen" component={AddScreen} />
                <Stack.Screen name="Project Screen" component={ProjectScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MainApp = () => {
    return (
        <Tab.Navigator style={{ Color: "red" }}>
            <Tab.Screen name="Skill" component={SkillScreen} style={{ backgroundColor: "red" }} />
            <Tab.Screen name="Add Screen" component={AddScreen} style={{ Color: "red" }} />
            <Tab.Screen name="Project Screen" component={ProjectScreen} />
        </Tab.Navigator>
    )
}
const MyDrawwer = () => {
    return (
        <Drawer.Navigator initialRouteName={AboutScreen} >
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Skill' component={MainApp} />
        </Drawer.Navigator>
    )
}

export default index
