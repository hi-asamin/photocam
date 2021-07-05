import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});

// 画像データ
export interface Props {
  imageUrl: string;
  // 任意入力
  // 保留：型どうしようか。
  style?: any;
}

export const UserImage = (props: Props) => {
  const { imageUrl, style } = props;
  return (
    <View>
      <Image style={[styles.userImage, style]} resizeMode="cover" source={{ uri: imageUrl }} />
    </View>
  );
};
