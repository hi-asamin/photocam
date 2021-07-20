import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { Food } from 'src/domain/models/food';
import { CAMPING_FOOD_DETAIL } from 'src/config/screens';
import { useNavigation } from '@react-navigation/native';

export interface Props {
  food: Food;
  // 任意入力
  // 保留：型どうしようか。
  style?: any;
}

export const FoodImage = (props: Props) => {
  const { navigate } = useNavigation();
  const { food, style } = props;
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => {
          navigate(CAMPING_FOOD_DETAIL, { food });
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.listImage} resizeMode="stretch" source={food.foodImages[0].image} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{food.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: ITEM_WIDTH * 0.45,
  },

  imageContainer: {
    flex: 1,
  },

  title: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginBottom: 10,
  },

  titleText: {
    fontSize: 15,
    fontWeight: '500',
  },

  listImage: {
    height: ITEM_WIDTH * 0.35,
  },
});
