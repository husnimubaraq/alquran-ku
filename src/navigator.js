// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/home/index';
import StartScreen from './pages/start/index';
import DetailScreen from './pages/detail/index';
import PurchaseScreen from './pages/purchase/index';
import Routes from './constants/routes';


const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name={Routes.Start} options={{headerShown:false}} component={StartScreen} /> */}
        <Stack.Screen name={Routes.Home} options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name={Routes.Detail} options={{headerShown:false}} component={DetailScreen} />
        <Stack.Screen name={Routes.Purchase} options={{headerShown:false}} component={PurchaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;