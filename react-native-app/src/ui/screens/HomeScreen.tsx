import React from 'react';
import { Button, View, Text } from 'react-native';

import { PROFILE } from 'src/config/screens';

export const HomeScreen = (props) => {
  const { navigation } = props;
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: PROFILE }],
    });
  };
  const title = 'Home';
  return (
    <>
      <View>
        <Text>{title}</Text>
        <Button title="プロフィール画面" onPress={handlePress} />
      </View>
    </>
  );
};
