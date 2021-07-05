import React from 'react';
import { View, FlatList } from 'react-native';

import { PostDetail } from 'src/ui/components/templates/PostDetail';
import { Post } from '@src/domain/models/post';

export const TimeLineScreen = () => {
  const renderItem = ({ item }: { item: Post }) => (
    <View style={{ flex: 1 }}>
      <PostDetail postList={item} />
    </View>
  );
  return (
    <View>
      <FlatList data={postList} renderItem={renderItem} keyExtractor={(item) => item.key} />
    </View>
  );
};

const postList: Post[] = [
  {
    key: '1',
    userName: '永野 芽郁',
    userId: '@mei_nagano',
    userImage: 'https://your-magazine.net/wp-content/uploads/2018/02/naganomei-35-a.jpg',
    postArea: '神奈川県横浜市',
    niceCount: '9999件',
    commentCount: '9999件',
    postText:
      'ファミリー！！この前福井デブとキャンプ行きました。すっごく楽しかった！NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN',
    postTime: '30分前',
    hashTags: ['#東京', '#横浜'],
    postImages: [
      {
        key: '1',
        image: { uri: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg' },
      },
      {
        key: '2',
        image: {
          uri: 'https://media.vogue.co.jp/photos/5e60f67633112e00089f20ab/master/pass/PRvj2020tracel03012.jpg',
        },
      },
    ],
  },
  {
    key: '2',
    userName: '広瀬 すず',
    userId: '@suzu_hirose',
    userImage:
      'https://crea.bunshun.jp/mwimgs/1/8/-/img_184e62faacd89169f4b653eaa61cdc10209775.jpg',
    postArea: '神奈川県川崎市',
    niceCount: '50件',
    commentCount: '70件',
    postText: 'マーシーは天才。',
    postTime: '2021/01/01',
    hashTags: ['#キャンプ', '#キャンプ飯'],
    postImages: [
      {
        key: '1',
        image: {
          uri: 'https://greenfield.style/wp/wp-content/uploads/2020/09/pixta_66420766_M-min.jpg',
        },
      },
      {
        key: '2',
        image: {
          uri: 'https://benridesu.jp/blog/wp-content/uploads/2021/04/yomimono_cammesi_hasserubackpotate.jpg',
        },
      },
      {
        key: '3',
        image: {
          uri: 'https://pbs.twimg.com/media/E3RwxrzUcAcCgl0.jpg',
        },
      },
    ],
  },
  {
    key: '3',
    userName: '森山',
    userId: '@moriyama',
    userImage:
      'https://creatorpicks.com/wp-content/uploads/2021/05/3d6cea6904bd3c313e64cfbe9e046393.png',
    postArea: '東京都港区',
    niceCount: '777件',
    commentCount: '777件',
    postText: 'スコラー1出てます。顔がかっこいいです。',
    postTime: '2020/12/01',
    hashTags: ['#スコラー', '#恵比寿', '#えびすじゃっぷ'],
    postImages: [
      {
        key: '1',
        image: {
          uri: 'https://i2.wp.com/youtuberpedia.com/wp-content/uploads/2020/09/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-09-28-18.09.22.png?fit=1229%2C818&ssl=1',
        },
      },
    ],
  },
];
