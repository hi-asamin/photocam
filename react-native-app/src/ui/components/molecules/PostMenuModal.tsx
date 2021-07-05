import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import constant from 'src/i18n/ja.json';

export interface Props {
  // 親のstateを変更する
  isVisible: boolean;
  setIsVisible: Function;
  // ログインユーザーと他ユーザーの投稿で表示するメニューを変更するため判別フラグを用意
  // 表示する項目など今後の検討課題とする
  userType?: string;
}

export const PostMenuModal = (props: Props) => {
  const { isVisible, setIsVisible } = props;
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={styles.modalContainer}
      >
        <View style={styles.menuModal}>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.buttonRedLabel}>{constant.button.delete}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.buttonBlackLabel}>{constant.button.edit}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.buttonBlackLabel}>{constant.button.linkCopy}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => setIsVisible(false)}>
            <Text style={styles.buttonBlackLabel}>{constant.button.cancel}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  menuModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
  },
  modalButton: {
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
  },

  buttonRedLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF3333',
  },
  buttonBlackLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
});
