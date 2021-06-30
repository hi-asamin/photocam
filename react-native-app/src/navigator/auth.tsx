import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { SignInScreen } from '@src/ui/screens/SignInScreen';
import { SignUpScreen } from '@src/ui/screens/SignUpScreen';

import { SIGNIN, SIGNUP } from 'src/config/screens';

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SIGNIN}
      component={SignInScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name={SIGNUP}
      component={SignUpScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);
