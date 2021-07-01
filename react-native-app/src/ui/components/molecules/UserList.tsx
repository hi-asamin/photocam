import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { SwitchButton } from 'src/ui/components/atoms/SwitchButton';
import { UserImage } from 'src/ui/components/atoms/UserImage';

import { User } from '@src/domain/models/user';

// 表示するユーザー
export interface Props {
  userList: User[];
}

export const UserList = (props: Props) => {
  const { userList } = props;
  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity style={styles.container}>
      <View style={styles.userListContainer}>
        <View style={styles.userInfoContainer}>
          <View>
            <UserImage imageUrl={item.imageUrl} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.userName}</Text>
            <Text style={styles.userId}>{item.userId}</Text>
            <View style={styles.userAreaContainer}>
              <Icon name="map-pin" size={14} />
              <Text style={styles.userArea}>{item.userArea}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <SwitchButton isFollow={item.isFollow} />
      </View>
    </TouchableOpacity>
  );

  if (!userList) {
    // 保留：表示対象が存在しない場合は検討してから実装
    // テキストと検索画面への遷移だけ？おすすめとかだす？
    return <View />;
  }
  return (
    <View>
      <FlatList data={userList} renderItem={renderItem} keyExtractor={(item) => item.key} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E1E6E6',
    paddingVertical: 3,
    paddingHorizontal: 12,
  },

  userListContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  userInfoContainer: {
    flexDirection: 'row',
  },

  userInfo: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  userName: {
    fontSize: 16,
    fontWeight: '500',
  },

  userId: {
    fontSize: 14,
    color: '#848484',
  },

  userAreaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userArea: {
    fontSize: 14,
  },

  button: {
    flex: 1,
    marginLeft: 100,
  },
});
