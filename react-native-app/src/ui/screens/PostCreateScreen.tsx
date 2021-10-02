import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PostFirebase } from 'src/domain/models/post';
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
const initialContent: PostFirebase = {
  userId: '',
  userName: '',
  body: '',
  createdAt: new Date(),
};

export interface Props {
  usecase: PostUsecase;
}

export const PostCreateScreen = (props: Props) => {
  const { usecase } = props;
  const [content, setConent] = useState<PostFirebase>(initialContent);
  const { navigate } = useNavigation();

  useEffect(() => {
    // usecase.getAllPosts();
    setConent({
      userId: '1',
      userName: 'testuser',
      body: 'test',
      createdAt: new Date(),
    });
  }, []);

  const handlePress = () => {
    usecase.savePost(content);
  };

  return (
    <View style={styles.container}>
      <Text>新規投稿画面</Text>
      <Button title="（仮）新規投稿" onPress={handlePress} />
      <Button
        title="ホーム画面"
        onPress={() => {
          navigate(HOME);
        }}
      />
      {/* <Text>{content}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
