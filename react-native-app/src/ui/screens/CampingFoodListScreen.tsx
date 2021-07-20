import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { CampFoodImages } from 'src/ui/components/molecules/CampFoodImages';
import { Food, foodList } from 'src/domain/models/food';

export const CampingFoodListScreen = (props: any) => {
  const { route } = props;
  const { item } = route.params;

  // 選択したジャンルの一覧のみを取得
  const selectFoodList: Food[] = foodList.filter((food) => food.genru === item.genru);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.genreTitle}</Text>
      </View>
      <View style={styles.imageListContainer}>
        <CampFoodImages foodList={selectFoodList} />
      </View>
    </View>
  );
};
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
