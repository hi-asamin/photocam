import React from 'react';
import { View } from 'react-native';

import { PostDetail } from 'src/ui/components/templates/PostDetail';
import { Post } from '@src/domain/models/post';

export const PostDetailScreen = () => (
  <View style={{ flex: 1 }}>
    <PostDetail postList={postList} />
  </View>
);

const postList: Post = {
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
};
