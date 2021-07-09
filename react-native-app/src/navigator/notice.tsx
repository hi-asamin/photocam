import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NoticeHomeScreen } from 'src/ui/screens/NoticeHomeScreen';
import { LikeListScreen } from 'src/ui/screens/LikeListScreen';
import { CommentListScreen } from 'src/ui/screens/CommentListScreen';

import { topTabs, NOTICE_HOME, LIKE_LIST, COMMENT_LIST } from 'src/config/screens';

const Tab = createMaterialTopTabNavigator();
function NoticeTopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NOTICE_HOME}
        component={NoticeHomeScreen}
        options={{ tabBarLabel: topTabs.notice }}
      />
      <Tab.Screen
        name={LIKE_LIST}
        component={LikeListScreen}
        options={{ tabBarLabel: topTabs.like }}
      />
      <Tab.Screen
        name={COMMENT_LIST}
        component={CommentListScreen}
        options={{ tabBarLabel: topTabs.comment }}
      />
    </Tab.Navigator>
  );
}

export const NoticeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={NOTICE_HOME} component={NoticeTopTab} />
      <Stack.Screen name={LIKE_LIST} component={LikeListScreen} />
      <Stack.Screen name={COMMENT_LIST} component={CommentListScreen} />
    </Stack.Navigator>
  );
};
