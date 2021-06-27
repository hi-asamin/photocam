import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HOME } from 'src/config/screens';

export const PostEditScreen = () => {
  const title = '投稿編集画面';
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title="ホーム画面"
        onPress={() => {
          navigate(HOME);
        }}
      />
    </View>
  );
};
