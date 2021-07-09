import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, Dimensions } from 'react-native';

import { UserImage } from 'src/ui/components/atoms/UserImage';
import { IMessage } from '@src/domain/models/imessage';
import { useNavigation } from '@react-navigation/native';

import { CHAT_DETAIL } from 'src/config/screens';

// ChatListScreen→ChatDetailScreenのprops、そもそも使用するライブラリが適切かも検討する
// ヘッダーからのチャット編集も行うため、その仕様も含めて決めてから実装
export const ChatListScreen = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }: { item: IMessage }) => (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => {
        navigate(CHAT_DETAIL);
      }}
    >
      <View style={styles.chatInfoContainer}>
        <View>
          <UserImage imageUrl={item.user.avatar} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text>{item.text}</Text>
        </View>
        <View style={styles.timeInfo}>
          <Text style={styles.createdAt}>{item.createdAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // messageのkeyにアンダーバーを使用しているため怒られる。ChatDatailScreenでのinterface指定のkeyなので保留。
  // !再度検討する!
  /* eslint-disable no-underscore-dangle */
  return (
    <View style={styles.container}>
      <FlatList data={chatList} renderItem={renderItem} keyExtractor={(item) => item._id} />
    </View>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E1E6E6',
    paddingVertical: 3,
    paddingHorizontal: 12,
  },

  chatInfoContainer: {
    flexDirection: 'row',
  },

  userInfo: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: ITEM_WIDTH * 0.6,
  },

  userName: {
    fontSize: 16,
    fontWeight: '500',
  },

  createdAt: {
    fontSize: 14,
    color: '#848484',
  },

  timeInfo: {
    paddingVertical: 10,
  },
});

// チャット表示用データ
// ChatDatailScreenと同様のinterfaceを使用する
// 今後、各チャットのリストからuser._id!=ログインユーザーIDかつ、createAt=最新のデータのみを表示対象とする想定
// Dateの変換部品も作成する
const chatList: IMessage[] = [
  {
    _id: '3',
    text: 'チャット文章３あああああああああああああああああああ',
    createdAt: 20210101,
    user: {
      _id: 'otheruser',
      name: '有村 架純',
      avatar: 'https://www.crank-in.net/img/db/1320965_1200.jpg',
    },
  },
  {
    _id: '2',
    text: 'チャット文章２',
    createdAt: 20210710,
    user: {
      _id: 'otheruser',
      name: '広瀬 すず',
      avatar: 'https://crea.bunshun.jp/mwimgs/1/8/-/img_184e62faacd89169f4b653eaa61cdc10209775.jpg',
    },
  },
  {
    _id: '1',
    text: 'チャット文章１',
    createdAt: 20200101,
    user: {
      _id: 'otheruser',
      name: '永野 芽郁',
      avatar: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    },
  },
];
