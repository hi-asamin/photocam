import React from 'react';
import { View } from 'react-native';

import { PostDetail } from 'src/ui/components/templates/PostDetail';

export const PostDetailScreen = (props: any) => {
  const { route } = props;
  return (
    <View style={{ flex: 1 }}>
      <PostDetail postList={route.params.item} />
    </View>
  );
};
