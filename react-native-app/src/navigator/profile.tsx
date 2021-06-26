import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from 'src/ui/screens/ProfileScreen';
import { ProfileCreateScreen } from 'src/ui/screens/ProfileCreateScreen';
import { ProfileEditScreen } from 'src/ui/screens/ProfileEditScreen';
import { FollowUsersScreen } from 'src/ui/screens/FollowUsersScreen';

import { PROFILE, PROFILE_CREATE, PROFILE_EDIT, FOLLOW_USERS } from 'src/config/screens';

const Stack = createStackNavigator();

export const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={PROFILE} component={ProfileScreen} />
    <Stack.Screen name={PROFILE_CREATE} component={ProfileCreateScreen} />
    <Stack.Screen name={PROFILE_EDIT} component={ProfileEditScreen} />
    <Stack.Screen name={FOLLOW_USERS} component={FollowUsersScreen} />
  </Stack.Navigator>
);
