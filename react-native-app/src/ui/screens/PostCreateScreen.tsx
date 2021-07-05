import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HOME } from 'src/config/screens';

{
  /* <Button
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
  */
}

export const PostCreateScreen = () => {
  const title = '新規投稿画面';
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
