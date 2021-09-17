import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/Food';
import Scanner from '../screens/scanner';
import FetchListScreen from '../screens/FoodDataScreen';


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='List' component={FetchListScreen} />
      <Stack.Screen name = 'Scanner' component={Scanner} />
    </Stack.Navigator>
  );
}