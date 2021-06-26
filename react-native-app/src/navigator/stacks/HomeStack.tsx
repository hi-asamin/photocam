import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'src/ui/screens/HomeScreen';
import { TimeLineScreen } from 'src/ui/screens/TimeLine';

import { HOME, TIMELINE } from 'src/config/screens';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={HOME} component={HomeScreen} />
    <Stack.Screen name={TIMELINE} component={TimeLineScreen} />
  </Stack.Navigator>
);
