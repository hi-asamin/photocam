import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStack } from 'src/navigator/home';
import { PostStack } from 'src/navigator/post';
import { ProfileStack } from 'src/navigator/profile';

import { bottomTabs } from 'src/config/screens';

const Tab = createBottomTabNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name={bottomTabs.home}
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name={bottomTabs.post}
        component={PostStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialCommunityIcons name="plus-circle-outline" size={32} />,
        }}
      />
      <Tab.Screen
        name={bottomTabs.profile}
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={32} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
