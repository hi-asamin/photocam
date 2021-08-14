import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Food } from 'src/domain/models/food';
import { FoodImage } from 'src/ui/components/atoms/FoodImage';

export interface Props {
  foodList: Food[];
}

export const CampFoodImages = (props: Props) => {
  const { foodList } = props;
  const renderItem = ({ item }: { item: Food }) => <FoodImage food={item} />;

  return (
    <View style={styles.imageList}>
      <FlatList
        data={foodList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageList: {
    flex: 1,
    alignItems: 'center',
  },
});
