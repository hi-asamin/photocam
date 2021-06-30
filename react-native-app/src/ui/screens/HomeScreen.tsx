import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TIMELINE, PROFILE, bottomTabs } from 'src/config/screens';

import message from 'src/i18n/ja.json';

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>{message.home.title}</Text>
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
