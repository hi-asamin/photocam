import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

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

// ボタン切り替えデータ
export interface Props {
  followFlg: boolean;
}

export const SwitchButton = ({ followFlg }: Props) => (
  <View>
    <TouchableOpacity>
      {followFlg ? (
        <View style={styles.buttonFollowContainer}>
          <Text style={styles.buttonFollowLabel}>フォロー</Text>
        </View>
      ) : (
        <View style={styles.buttonUnFollowContainer}>
          <Text style={styles.buttonUnFollowLabel}>フォローする</Text>
        </View>
      )}
    </TouchableOpacity>
  </View>
);
