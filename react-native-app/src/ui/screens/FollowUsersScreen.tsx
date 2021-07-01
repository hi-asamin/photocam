import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View, SafeAreaView, StyleSheet } from 'react-native';

import { ListUsers } from 'src/ui/components/molecules/ListUsers';
import { SearchBar } from 'src/ui/components/atoms/SearchBar';

import { topTabs } from 'src/config/screens';

export const FollowUsersScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [searchUser, setSearchUser] = useState('');
  const { dangerouslyGetState } = useNavigation();

  const state = dangerouslyGetState();
  const actualRoute = state.routes[state.index];
  const actualRouteState = actualRoute.state ? actualRoute.state : undefined;
  const actualRouteStateIndex = actualRouteState?.index ? actualRouteState.index : 0;
  const actualRouteNames = actualRouteState?.routeNames ? actualRouteState.routeNames : undefined;
  const routeName = actualRouteNames ? actualRouteNames[actualRouteStateIndex] : '';

  const isFollower = routeName === 'フォロワー';

  const Follower = () => (
    <View style={styles.container}>
      <SearchBar searchText={searchUser} setSearchText={setSearchUser} />
      <ListUsers isFollower={isFollower} />
      <SafeAreaView />
    </View>
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name={topTabs.follower} component={Follower} />
        <Tab.Screen name={topTabs.following} component={Follower} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
