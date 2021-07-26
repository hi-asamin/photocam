import React from 'react';
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { POST_DETAIL } from 'src/config/screens';
import { Post } from 'src/domain/models/post';

export interface Props {
  postList: Post[];
}

export const ListImages = (props: Props) => {
  const { navigate } = useNavigation();
  const { postList } = props;
  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.listImage}>
      <TouchableOpacity
        onPress={() => {
          navigate(POST_DETAIL, { item });
        }}
      >
        <Image style={styles.listImage} resizeMode="stretch" source={item.postImages[0].image} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.imageList}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={3}
      />
    </View>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageList: {
    flex: 1,
    paddingHorizontal: 1,
  },

  listImage: {
    width: ITEM_WIDTH / 3,
    height: ITEM_WIDTH / 3,
  },
});
