import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { UserImage } from 'src/ui/components/atoms/UserImage';
import { User } from 'src/domain/models/user';

import constant from 'src/i18n/ja.json';

export interface Props {
  selectUserList: User[];
}

export const UserInfo = (props: Props) => {
  const { selectUserList } = props;
  return (
    <View>
      <TouchableOpacity style={styles.userInfocontainer}>
        <UserImage imageUrl={selectUserList[0].imageUrl} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{selectUserList[0].userName}</Text>
          <Text style={styles.userId}>{selectUserList[0].userId}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>{constant.button.follow}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  userInfo: {
    paddingLeft: 5,
    paddingTop: 10,
  },
  userImage: {
    width: 60,
    height: 60,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userId: {
    fontSize: 14,
  },
  buttonContainer: {
    marginLeft: 'auto',
    backgroundColor: '#467FD3',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 30,
  },
  buttonLabel: {
    fontSize: 12,
    color: '#ffffff',
  },
});
