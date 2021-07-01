import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { SwitchButton } from 'src/ui/components/atoms/SwitchButton';
import { UserImage } from 'src/ui/components/atoms/UserImage';

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

// 表示するユーザー
export interface Props {
  isFollower: boolean;
}

// 一覧表示用データ
export interface ListUser {
  key: string;
  userName: string;
  userId: string;
  userArea: string;
  followFlg: boolean;
  imageUrl: string;
}

const followerList: ListUser[] = [
  {
    key: '1',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '2',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '3',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '4',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '5',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '6',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '7',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '8',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '9',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '10',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    followFlg: false,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
];

const followList: ListUser[] = [
  {
    key: '1',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '2',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '3',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '4',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '5',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '6',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '7',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '8',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '9',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '10',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    followFlg: true,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
];

export const ListUsers = (props: Props) => {
  const { isFollower } = props;
  const renderItem = ({ item }: { item: ListUser }) => (
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
        <SwitchButton followFlg={item.followFlg} />
      </View>
    </TouchableOpacity>
  );

  // 表示するユーザー情報
  // 暫定対応
  const userList = isFollower ? followerList : followList;

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
