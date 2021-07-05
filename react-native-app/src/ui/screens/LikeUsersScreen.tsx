import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { UserList } from 'src/ui/components/molecules/UserList';
import { User } from '@src/domain/models/user';

// 表示対象ユーザー判別のため、今後src/ui/components/organisms/FollowFollowersを共通化する
// interfaceも共通のため、firebase上でフォロー、フォロワーの管理方法を検討後に実装した方が手間が省ける
// 上記の理由から仮作成
export const LikeUsersScreen = () => (
  <View style={styles.container}>
    <UserList userList={userList} />
    <SafeAreaView />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

// 一覧表示用データ
const userList: User[] = [
  {
    key: '11',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: true,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '12',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: true,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '13',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: false,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '14',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: true,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '15',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: false,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '16',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: true,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '17',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: false,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '18',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: true,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '19',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: false,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
  {
    key: '20',
    userName: '永野 芽衣',
    userId: '@mei_nagano',
    userArea: 'tokyo',
    isFollow: true,
    isFollower: false,
    imageUrl: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
  },
];
