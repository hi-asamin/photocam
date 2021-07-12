import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

// 画面下部におすすめの記事やユーザーを表示するか検討する
export const NoticeDetailScreen = (props: any) => {
  const { route } = props;
  const { image, title, text, createdAt } = route.params.item;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.noticeHeader}>
          <View style={styles.titleInfo}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.createdAt}>{createdAt}</Text>
        </View>
        <View style={styles.noticeImageContainer}>
          <Swiper loop={false}>
            {image.map((data: any) => (
              <Image
                key={data.key}
                style={styles.noticeImage}
                resizeMode="contain"
                source={data.image}
              />
            ))}
          </Swiper>
        </View>
        <View style={styles.noticeBody}>
          <Text style={styles.noticeText}>{text}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noticeHeader: {
    borderBottomWidth: 1,
    borderColor: '#E1E6E6',
  },
  titleInfo: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  createdAt: {
    fontSize: 15,
    color: '#848484',
    marginTop: 'auto',
    paddingLeft: 10,
    paddingBottom: 5,
  },

  noticeImageContainer: {
    width: '100%',
    height: 280,
  },
  noticeImage: {
    width: '100%',
    height: 280,
  },

  noticeBody: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  noticeText: {
    fontSize: 18,
  },
});
