import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import constant from 'src/i18n/ja.json';

// ボタン切り替えデータ
export interface Props {
  isFollow: boolean;
}

export const SwitchButton = (props: Props) => {
  const { isFollow } = props;
  return (
    <View>
      <TouchableOpacity>
        {isFollow ? (
          <View style={styles.buttonFollowContainer}>
            <Text style={styles.buttonFollowLabel}>{constant.button.following}</Text>
          </View>
        ) : (
          <View style={styles.buttonUnFollowContainer}>
            <Text style={styles.buttonUnFollowLabel}>{constant.button.follow}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFollowContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  },

  buttonUnFollowContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    borderWidth: 1,
    borderColor: '#467FD3',
  },

  buttonFollowLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    lineHeight: 32,
    fontWeight: '500',
  },

  buttonUnFollowLabel: {
    fontSize: 12,
    color: '#467FD3',
    lineHeight: 32,
    fontWeight: '500',
  },
});
