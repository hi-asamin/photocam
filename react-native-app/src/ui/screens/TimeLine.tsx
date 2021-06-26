import React from 'react';
import { Button, View, Text } from 'react-native';

import { HOME } from 'src/config/screens';

export const TimeLineScreen = (props) => {
  const title = 'TimeLineScreen';
  const { navigation } = props;
  return (
    <>
      <View>
        <Text>{title}</Text>
        <Button
          title="ホーム画面"
          onPress={() => {
            navigation.navigate(HOME);
          }}
        />
      </View>
    </>
  );
};
