import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImageView from 'react-native-image-viewing';
import Hyperlink from 'react-native-hyperlink';
import Icon from 'react-native-vector-icons/Feather';

import ListImages from 'src/ui/components/molecules/ListImages';

export default function ProfileScreen() {
  const [backVisible, setIsBackVisible] = useState(false);
  const [profileVisible, setIsProfileVisible] = useState(false);

  // テスト用画像データ
  const backImages = [{ uri: 'https://www.bepal.net/wp-content/uploads/2020/07/IMG_9902.jpg' }];
  const profileImages = [{ uri: 'https://your-magazine.net/wp-content/uploads/2018/02/naganomei-35-a.jpg' }];

  return (
    <View style={styles.container}>
      <ImageView
        images={backImages}
        imageIndex={0}
        visible={backVisible}
        swipeToCloseEnabled
        onRequestClose={() => setIsBackVisible(false)}
      />
      <ImageView
        images={profileImages}
        imageIndex={0}
        visible={profileVisible}
        swipeToCloseEnabled
        onRequestClose={() => setIsProfileVisible(false)}
      />
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.profileBackImage}
            onPress={() => setIsBackVisible(true)}
          >
            <Image
              style={styles.profileBackImage}
              resizeMode="stretch"
              source={backImages}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileImage}
            onPress={() => setIsProfileVisible(true)}
          >
            <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={profileImages}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.userProfile}>
          <View style={styles.userProfileNameId}>
            <Text style={styles.userName}>永野 芽郁</Text>
            <Text style={styles.userId}>@test</Text>
            <Text>神奈川県横浜市</Text>
            <Text style={styles.followYes}>フォローされています</Text>
          </View>
          {/* <View style={styles.profileButton}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonLabel}>プロフィール編集</Text>
            </TouchableOpacity>
          </View> */}
          <View>
            <View style={styles.profileButton}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>フォロー中</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>メッセージ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.countContainer}>
              <TouchableOpacity style={styles.counter}>
                <Text style={styles.countNum}>999999</Text>
                <Text style={styles.countLabel}>投稿</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.counter}>
                <Text style={styles.countNum}>999999</Text>
                <Text style={styles.countLabel}>フォロー中</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.counter}>
                <Text style={styles.countNum}>999999</Text>
                <Text style={styles.countLabel}>フォロワー</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.profileStatement}>
          <Text>
            プロフィール文。以下150文字。６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０
            {'\n'}
            １２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０
            {'\n'}
            １２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０
          </Text>
          <Hyperlink linkStyle={{ color: '#2980b9', fontWeight: 'bold' }}>
            <View style={styles.snsLinks}>
              <Icon name="youtube" size={15} />
              <Text style={styles.snsLink}>https://www.youtube.com/</Text>
            </View>
            <View style={styles.snsLinks}>
              <Icon name="facebook" size={15} />
              <Text style={styles.snsLink}>https://ja-jp.facebook.com/</Text>
            </View>
            <View style={styles.snsLinks}>
              <Icon name="instagram" size={15} />
              <Text style={styles.snsLink}>https://www.instagram.com/?hl=ja</Text>
            </View>
          </Hyperlink>
        </View>
      </View>
      <ListImages />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
    paddingVertical: 35,
    paddingHorizontal: 10,
  },
  profileBackImage: {
    ...StyleSheet.absoluteFillObject,
  },

  profileContainer: {
    flex: 1,
  },

  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  counter: {
    marginRight: 25,
  },

  countNum: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

  countLabel: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
  },

  imageContainer: {
    height: 120,
  },

  container: {
    flex: 1,
  },

  userProfile: {
    flexDirection: 'row',
  },

  userProfileNameId: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  userName: {
    fontSize: 24,
    fontWeight: '500',
  },

  userId: {
    fontSize: 16,
    lineHeight: 16,
    color: '#848484',
  },

  followYes: {
    marginTop: 5,
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },

  profileButton: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  buttonLabel: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 32,
    paddingHorizontal: 20,
  },

  profileStatement: {
    paddingHorizontal: 15,
  },

  snsLinks: {
    flexDirection: 'row',
    marginTop: 7,
  },

  snsLink: {
    marginLeft: 5,
    fontSize: 12,
  },

});
