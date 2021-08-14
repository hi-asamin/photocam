import React, { useState } from 'react';

import { View, SafeAreaView, StyleSheet } from 'react-native';

import { UserList } from 'src/ui/components/molecules/UserList';
import { SearchBar } from 'src/ui/components/atoms/SearchBar';

import { User } from '@src/domain/models/user';

export interface Props {
  isFollower: boolean;
  userList: User[];
}

export const FollowFollowers = (props: Props) => {
  const { isFollower, userList } = props;
  const [searchUser, setSearchUser] = useState('');
  const displayUserList: User[] = userList.filter((user) => user.isFollower === isFollower);

  return (
    <View style={styles.container}>
      <SearchBar searchText={searchUser} setSearchText={setSearchUser} setIsFocus={() => {}} />
      <UserList userList={displayUserList} />
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
