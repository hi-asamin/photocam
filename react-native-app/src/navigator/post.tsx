import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { PostInteractor } from 'src/application/interactors/post-interactor';

import { PostCreateScreen } from 'src/ui/screens/PostCreateScreen';
import { PostEditScreen } from 'src/ui/screens/PostEditScreen';

import { POST_CREATE, POST_EDIT } from 'src/config/screens';

const Stack = createStackNavigator();

export const PostStack = () => {
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={POST_CREATE}
        options={{
          headerTitle: '新規投稿画面',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerLeft: () => (
            <Button
              title="キャンセル"
              onPress={() => {
                goBack();
              }}
            />
          ),
        }}
      >
        {() => <PostCreateScreen usecase={new PostInteractor()} />}
      </Stack.Screen>
      <Stack.Screen name={POST_EDIT} component={PostEditScreen} />
    </Stack.Navigator>
  );
};
