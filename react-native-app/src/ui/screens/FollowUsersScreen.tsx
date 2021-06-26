import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ListUsers } from 'src/ui/components/molecules/ListUsers';

export const FollowUsersScreen = () => {
  const [searchUser, setSearchUser] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View>
          <Icon name="search" size={16} style={styles.icon} />
        </View>
        <View>
          <TextInput
            style={styles.searchBar}
            value={searchUser}
            onChangeText={(text) => {
              setSearchUser(text);
            }}
            placeholder="検索"
            keyboardType="default"
            returnKeyType="done"
          />
        </View>
      </View>
      <ListUsers />
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },

  searchBar: {
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
    // 保留：Viewのwidth*0.9 が好ましい
    width: 500,
  },

  icon: {
    color: '#BBBBBB',
  },

  searchBarContainer: {
    backgroundColor: '#DDDDDD',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
