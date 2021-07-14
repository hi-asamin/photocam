import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ListImages } from 'src/ui/components/molecules/ListImages';
import { SearchBar } from 'src/ui/components/atoms/SearchBar';

// twitterは検索履歴画面を作ってるっぽい
// とりあえず我流、表示非表示で対応
// キーボードの非表示タイミングがイケテナイからあとで検討する。
export const SearchScreen = () => {
  // 検索するテキスト
  const [searchUser, setSearchUser] = useState('');
  // フォーカスの有無
  const [isFocus, setIsFocus] = useState(false);

  // textinputフォーカス時
  const renderHistoryItem = ({ item }: { item: History }) => (
    <View>
      <TouchableOpacity
        style={styles.historyInfo}
        onPress={() => {
          setSearchUser(item.history);
        }}
      >
        <Text style={styles.ttitle}>{item.history}</Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="x" size={20} style={styles.icon} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar searchText={searchUser} setSearchText={setSearchUser} setIsFocus={setIsFocus} />

      {isFocus && (
        <View style={styles.historyContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>検索履歴</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setIsFocus(false);
              }}
            >
              <Text style={styles.text}>キャンセル</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <FlatList
              data={noticeList}
              renderItem={renderHistoryItem}
              keyExtractor={(item) => item.key}
            />
          </View>
        </View>
      )}
      {!isFocus && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageTitle}>人気の投稿</Text>
          <ListImages />
        </View>
      )}
      <SafeAreaView />
    </View>
  );
};

// 検索履歴は暫定で。
export interface History {
  key: string;
  history: string;
}

const noticeList: History[] = [
  {
    key: '1',
    history: 'キャンプ場',
  },
  {
    key: '2',
    history: 'キャンプ飯',
  },
  {
    key: '3',
    history: 'グランピング',
  },
  {
    key: '4',
    history: '一人キャンプ',
  },
  {
    key: '5',
    history: '都内　キャンプ場',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  historyContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },

  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    // backgroundColor: '#C0C0C0',
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#848484',
  },
  imageTitle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#848484',
  },
  button: {
    marginLeft: 'auto',
    paddingRight: 10,
  },
  icon: {
    color: '#848484',
  },
  text: {
    color: '#848484',
    fontSize: 16,
  },

  historyInfo: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E1E6E6',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  NoticeInfo: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 5,
    flexDirection: 'row',
  },

  ttitle: {
    fontSize: 16,
    fontWeight: '500',
  },

  createdAt: {
    fontSize: 14,
    color: '#848484',
    marginTop: 'auto',
  },
});
