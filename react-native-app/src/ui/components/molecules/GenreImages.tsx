import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { CAMPING_FOOD_LIST } from 'src/config/screens';
import { Genre } from 'src/domain/models/food';

export interface Props {
  genreList: Genre[];
}

export const GenreImages = (props: Props) => {
  const { navigate } = useNavigation();
  const { genreList } = props;
  const renderItem = ({ item }: { item: Genre }) => (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigate(CAMPING_FOOD_LIST, { item });
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.listImage} resizeMode="cover" source={item.genreImage} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{item.genreTitle}</Text>
          </View>
          <View>
            <Text style={styles.text}>{item.genreText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.imageList}>
      <FlatList
        data={genreList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </View>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageList: {
    flex: 1,
    alignItems: 'center',
  },

  container: {
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: ITEM_WIDTH * 0.45,
  },

  imageContainer: {
    flex: 1,
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  titleText: {
    fontSize: 18,
    fontWeight: '500',
  },

  title: {
    marginBottom: 8,
  },

  text: {
    fontSize: 15,
    fontWeight: '400',
  },

  listImage: {
    height: ITEM_WIDTH * 0.25,
  },
});
