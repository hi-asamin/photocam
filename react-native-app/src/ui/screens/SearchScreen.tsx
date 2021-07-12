import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import { SearchBar } from 'src/ui/components/atoms/SearchBar';

export const SearchScreen = () => {
  const [searchUser, setSearchUser] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar searchText={searchUser} setSearchText={setSearchUser} />
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
