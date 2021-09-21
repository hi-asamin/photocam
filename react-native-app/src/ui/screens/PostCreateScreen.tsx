import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PostUsecase } from 'src/application/usecases/post-usecase';

import { HOME } from 'src/config/screens';

// navigate 例
// {
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
// }
export interface Props {
  usecase: PostUsecase;
}

export const PostCreateScreen = (props: Props) => {
  const { usecase } = props;
  const [memos, setMemos] = useState('init');
  const { navigate } = useNavigation();

  useEffect(() => {
    usecase.getAllPosts();
    setMemos('finish getAllPosts');
  }, []);

  return (
    <View style={styles.container}>
      <Text>新規投稿画面</Text>
      <Button
        title="（仮）新規投稿"
        onPress={() => {
          usecase.addPost('photcam');
        }}
      />
      <Button
        title="ホーム画面"
        onPress={() => {
          navigate(HOME);
        }}
      />
      <Text>{memos}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
