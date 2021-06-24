import React from 'react';
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';

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

// 一覧表示用画像データ
export interface props {
  key: string;
  imageUrl: string;
}

const imageList: props[] = [
  {
    key: '1',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '2',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '3',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '4',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '5',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '7',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '8',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '9',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '10',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '11',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '12',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '13',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
  {
    key: '14',
    imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
  },
];

export const ListImages = () => {
  const renderItem = ({ item }: { item: props }) => (
    <View style={styles.listImage}>
      <TouchableOpacity>
        <Image style={styles.listImage} resizeMode="stretch" source={{ uri: item.imageUrl }} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.imageList}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={3}
      />
    </View>
  );
};
