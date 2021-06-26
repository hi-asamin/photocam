import React from 'react';
import { Button, View, Text } from 'react-native';

import { TIMELINE, PROFILE } from 'src/config/screens';

export const HomeScreen = (props) => {
  const { navigation } = props;
  const title = 'Home';
  return (
    <>
      <View>
        <Text>{title}</Text>
        <Button
          title="プロフィール画面"
          onPress={() => {
            navigation.navigate(PROFILE);
          }}
        />
        <Button
          title="タイムライン画面"
          onPress={() => {
            navigation.navigate(TIMELINE);
          }}
        />
      </View>
    </>
  );
};
