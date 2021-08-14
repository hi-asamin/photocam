import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { GenreImages } from 'src/ui/components/molecules/GenreImages';

import constant from 'src/i18n/ja.json';
import { genreList } from 'src/domain/models/food';

export const CampingFoodHomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{constant.label.genre}</Text>
    </View>
    <View style={styles.imageListContainer}>
      <GenreImages genreList={genreList} />
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 7,
    paddingTop: 20,
    paddingBottom: 10,
  },
  imageListContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#808080',
  },
});
