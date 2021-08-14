import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from 'src/ui/screens/SearchScreen';

import { SEARCH } from 'src/config/screens';

const Stack = createStackNavigator();

export const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={SEARCH} component={SearchScreen} />
  </Stack.Navigator>
);
