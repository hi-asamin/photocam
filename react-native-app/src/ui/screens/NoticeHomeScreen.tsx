import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NOTICE_DETAIL } from 'src/config/screens';

export const NoticeHomeScreen = () => {
  const { navigate } = useNavigation();
  const renderItem = ({ item }: { item: Notice }) => (
    <TouchableOpacity
      style={styles.noticeContainer}
      onPress={() => {
        navigate(NOTICE_DETAIL, { item });
      }}
    >
      <View style={styles.NoticeInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.createdAt}>{item.createdAt}</Text>
      </View>
      <View>
        <Image resizeMode="cover" source={item.image[0].image} style={styles.noticeImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={noticeList} renderItem={renderItem} keyExtractor={(item) => item.key} />
    </View>
  );
};

const ITEM_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noticeContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E1E6E6',
    paddingVertical: 5,
  },

  NoticeInfo: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    width: ITEM_WIDTH * 0.6,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
  },

  createdAt: {
    fontSize: 14,
    color: '#848484',
    marginTop: 'auto',
  },

  noticeImage: {
    width: ITEM_WIDTH * 0.4,
    height: 100,
  },
});

// 画像データは先頭の1件目のみを一覧に表示する
// 管理方法検討後、配列の先頭ではなくkeyでの指定に変更すべき
// image[].keyは詳細画面のスワイパーで必要のため必須
export interface Notice {
  key: string;
  image: { key: string; image: { uri: string } }[];
  title: string;
  text: string;
  createdAt: string;
}

const noticeList: Notice[] = [
  {
    key: '1',
    image: [
      {
        key: '1',
        image: { uri: 'https://www.fashion-press.net/img/news/74554/FEE.jpg' },
      },
      {
        key: '2',
        image: { uri: 'https://www.fashion-press.net/img/news/74554/x_o.jpg' },
      },
    ],
    title: '広島・尾道にグランピング施設　瀬戸内海の「生口島」に開業',
    text: '広島県尾道市の生口島に8月、尾道市初のドーム型グランピング施設「グランドーム瀬戸内しまなみ」（尾道市瀬戸田町）がオープンする。（広島経済新聞）\n\n国内有数のレモン、かんきつ類の生産量を誇る生口島。瀬戸内海に囲まれ、本州側の尾道市から四国・今治市まで、島々を7つの橋でつなぐ「しまなみ海道」は「サイクリストの聖地」として知られ、サイクリングコースとしても人気を誇る。\n\nグランピング施設は、地方の魅力を体験してほしいとグランピング事業を手掛ける「レストレーション」（尾道市瀬戸田町）が遊休地を活用して開業する。敷地面積は975坪。宿泊棟は生口島のシーサイドに設け、全7室でオーシャンビューを楽しめる。宿泊料金は1万800円から。定員は部屋タイプによって異なり、1室4人～最大10人まで利用でき、カップルやファミリー、女性同士やグループ旅行の利用を見込む。\n\nテント内には、アウトドア初心者でも安心して利用できるよう設備を充実させ、各テント前のプライベートデッキでは雨でもバーベキューが楽しめるスペースを完備する。アクティビティーは、サイクリングや釣り、瀬戸田レモンを使ったレモンスカッシュ作りなどを用意。食や自然体験を、グランピングを通じて伝えるという。\n\n開業は8月7日予定。予約は、「リゾートグランピングドットコム」で受け付ける。同社では来年、生口島に隣接する「高根島」でもグランピング施設の開業を予定する。',
    createdAt: new Date().toLocaleString(),
  },
];
