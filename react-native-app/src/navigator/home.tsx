import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { HomeScreen } from 'src/ui/screens/HomeScreen';
import { TimeLineScreen } from 'src/ui/screens/TimeLine';

import { HOME, TIMELINE, topTabs } from 'src/config/screens';

const Tab = createMaterialTopTabNavigator();
function HomeTopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={HomeScreen} options={{ tabBarLabel: topTabs.home }} />
      <Tab.Screen
        name={TIMELINE}
        component={TimeLineScreen}
        options={{ tabBarLabel: topTabs.timeLine }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={HOME} component={HomeTopTab} />
  </Stack.Navigator>
);