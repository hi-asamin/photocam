import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { UserImage } from 'src/ui/components/atoms/UserImage';
import { User } from 'src/domain/models/user';
import { SwitchButton } from 'src/ui/components/atoms/SwitchButton';

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
        <View style={styles.buttonContainer}>
          <SwitchButton isFollow={selectUserList[0].isFollow} />
        </View>
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
  },
});
