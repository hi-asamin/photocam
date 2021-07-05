import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export interface Props {
  buttonText: string;
  // 標準がPostDetailScreen合わせのため文字色など変更したい場合は上書きしてください
  style?: any;
}

export const TextButton = (props: Props) => {
  const { buttonText, style } = props;
  return (
    <View>
      <TouchableOpacity>
        <Text style={[styles.buttonLabel, style]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#467FD3',
  },
});
