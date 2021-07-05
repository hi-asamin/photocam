import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, View, Text } from 'react-native';

export interface Props {
  imageUrl: string;
  trendText: string;
}

export const TrendImage = (props: Props) => {
  const { imageUrl, trendText } = props;
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity>
        <ImageBackground style={styles.trendImage} resizeMode="stretch" source={{ uri: imageUrl }}>
          <View style={styles.trendTextContainer}>
            <Text style={styles.trendText}>{trendText}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: 180,
    height: 80,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  trendImage: {
    width: 180,
    height: 80,
  },
  trendTextContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  trendText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
