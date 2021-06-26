import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from 'src/ui/screens/ProfileScreen';

import { PROFILE } from 'src/config/screens';

const Stack = createStackNavigator();

export const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={PROFILE} component={ProfileScreen} />
  </Stack.Navigator>
);
