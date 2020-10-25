import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import 'react-native-gesture-handler';
import { Home, GetVoucher, DetailNews, Splash } from '../../containers/Pages'
const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="DetailNews" component={DetailNews} options={{ headerShown: false }} />
                <Stack.Screen name="GetVoucher" component={GetVoucher} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Router;

