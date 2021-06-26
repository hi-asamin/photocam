import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStack } from 'src/navigator/stacks/HomeStack';
import { ProfileStack } from 'src/navigator/stacks/ProfileStack';

const Tab = createBottomTabNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      {/* <Tab.Screen
        name="HOME"
        component={HomeStack}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" />,
        }}
      /> */}
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  </NavigationContainer>
);
