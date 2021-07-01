import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View, StyleSheet } from 'react-native';

import { FollowFollowers } from 'src/ui/components/organisms/FollowFollowers';

import { User } from '@src/domain/models/user';

import { topTabs } from 'src/config/screens';

export const FollowUsersScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name={topTabs.follower}>
          {() => <FollowFollowers isFollower userList={userList} />}
        </Tab.Screen>
        <Tab.Screen name={topTabs.following}>
          {() => <FollowFollowers isFollower={false} userList={userList} />}
        </Tab.Screen>
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

// 一覧表示用データ
const userList: User[] = [
  {
    key: '1',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '2',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '3',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '4',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '5',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '6',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '7',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '8',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '9',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
  {
    key: '10',
    userName: '朝倉 未来',
    userId: '@mikuru_asakura',
    userArea: 'nagoya',
    isFollow: false,
    isFollower: true,
    imageUrl:
      'https://risshikaikan.jp/wp-content/uploads/2021/01/47137720-61A0-4437-8D80-705CE77154C1.jpeg',
  },
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
