import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TIMELINE, PROFILE, bottomTabs } from 'src/config/screens';

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const title = 'Home';
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title="プロフィール画面"
        onPress={() => {
          navigate(bottomTabs.profile, { screen: PROFILE });
        }}
      />
      <Button
        title="タイムライン画面"
        onPress={() => {
          navigate(TIMELINE);
        }}
      />
    </View>
  );
};
