import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { ListImages } from 'src/ui/components/molecules/ListImages';
import { TrendImage } from 'src/ui/components/atoms/TrendImage';

import constant from 'src/i18n/ja.json';

export const HomeScreen = () => {
  const renderItem = ({ item }: { item: TrendData }) => (
    <View>
      <TrendImage imageUrl={item.imageUrl} trendText={item.trendText} />
    </View>
  );
  return (
    <ScrollView>
      <View style={styles.trendContainer}>
        <Text style={styles.trendTitle}>{constant.label.trend}</Text>
        <View style={styles.trendImageList}>
          <FlatList
            data={trendList}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
          />
        </View>
      </View>
      <View style={styles.imageListContainer}>
        <ListImages />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  trendContainer: {
    flex: 1,
    paddingHorizontal: 7,
    paddingTop: 20,
    paddingBottom: 10,
  },
  imageListContainer: {
    flex: 1,
  },
  trendImageList: {
    alignItems: 'center',
  },
  trendTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#808080',
  },
});

// トレンド表示用画像データ
export interface TrendData {
  key: string;
  imageUrl: string;
  trendText: string;
}

const trendList: TrendData[] = [
  {
    key: '1',
    imageUrl:
      'https://www.campnofuji.jp/column/cms/wp-content/uploads/2021/02/img_solo-camp_003.jpg',
    trendText: 'ソロキャンプ',
  },
  {
    key: '2',
    imageUrl: 'https://www.resort-glamping.com/wp-content/uploads/2019/12/skyhillglamping12.jpg',
    trendText: 'グランピング',
  },
  {
    key: '3',
    imageUrl: 'https://p0bcd8hr.user.webaccel.jp/wp-content/uploads/2015/12/IMGP7275.jpg',
    trendText: 'ロースタイル',
  },
  {
    key: '4',
    imageUrl:
      'https://p1-16efdeae.imageflux.jp/default/image/image/964774288381818986/article_pc_GettyImages-821832652.jpg',
    trendText: '女子キャンプ',
  },
];
