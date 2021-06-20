import React from 'react';
import {
  StyleSheet, TouchableOpacity, Image,
} from 'react-native';

const styles = StyleSheet.create({
  listImage: {
    width: 137,
    height: 137,
  },
});

export default function ListImage(props) {
  // eslint-disable-next-line react/prop-types
  const { url } = props;
  return (
    // <View style={styles.listContainer}>
    <TouchableOpacity>
      <Image
        style={styles.listImage}
        resizeMode="stretch"
        source={{ uri: url }}
      />
    </TouchableOpacity>
    // </View>
  );
}
