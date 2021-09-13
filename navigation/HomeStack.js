import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/Food';
import Scanner from '../screens/scanner';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Food' component={FoodScreen} />
      <Stack.Screen name = 'Scanner' component={Scanner} />
    </Stack.Navigator>
  );
}