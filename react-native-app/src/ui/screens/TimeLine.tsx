import React from 'react';
import { View, FlatList } from 'react-native';

import { PostDetail } from 'src/ui/components/templates/PostDetail';
import { Post, postList } from 'src/domain/models/post';

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
