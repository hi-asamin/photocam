import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ListUsers } from 'src/ui/components/molecules/ListUsers';
import { SearchBar } from 'src/ui/components/atoms/SearchBar';

export const SearchScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [searchUser, setSearchUser] = useState('');
  const [userType, setUserType] = useState('follower');

  const Follower = () => (
    <View style={styles.container}>
      <SearchBar searchText={searchUser} setSearchText={setSearchUser} />
      <ListUsers userType={userType} />
      <SafeAreaView />
    </View>
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="フォロワー" component={Follower} />
        <Tab.Screen name="フォロー" component={Follower} />
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
