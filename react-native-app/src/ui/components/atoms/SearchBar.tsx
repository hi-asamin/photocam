import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import constant from 'src/i18n/ja.json';

// 親のstateを変更する
export interface Props {
  searchText: string;
  setSearchText: Function;
}

export const SearchBar = (props: Props) => {
  const { searchText, setSearchText } = props;
  return (
    <View style={styles.searchBarContainer}>
      <View>
        <Icon name="search" size={16} style={styles.icon} />
      </View>
      <View>
        <TextInput
          style={styles.searchBar}
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          placeholder={constant.label.search}
          keyboardType="default"
          returnKeyType="done"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
