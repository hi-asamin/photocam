import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStack } from 'src/navigator/stacks/HomeStack';
import { ProfileStack } from 'src/navigator/stacks/ProfileStack';

const Tab = createBottomTabNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={32} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
