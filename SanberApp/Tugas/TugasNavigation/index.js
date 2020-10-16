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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const index = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={LoginScreen} />
                <Drawer.Screen name='About' component={AboutScreen} />
                <Drawer.Screen name='Skill' component={MainApp} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Skill" component={SkillScreen} />
            <Tab.Screen name="Add Screen" component={AddScreen} />
            <Tab.Screen name="Project Screen" component={ProjectScreen} />
        </Tab.Navigator>
    )
}

export default index
