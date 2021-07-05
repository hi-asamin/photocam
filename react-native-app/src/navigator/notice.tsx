import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NoticeHomeScreen } from 'src/ui/screens/NoticeHomeScreen';

import { NOTICE_HOME } from 'src/config/screens';

const Stack = createStackNavigator();

export const NoticeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={NOTICE_HOME} component={NoticeHomeScreen} />
  </Stack.Navigator>
);
