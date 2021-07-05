import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';

import constant from 'src/i18n/ja.json';

// テスト用画像データ
const backImages = [{ uri: 'https://www.bepal.net/wp-content/uploads/2020/07/IMG_9902.jpg' }];
const profileImages = [
  {
    uri: 'https://your-magazine.net/wp-content/uploads/2018/02/naganomei-35-a.jpg',
  },
];

// RNPickerSelect
export interface PickerData {
  label: string;
  value: string;
}

const areaList: PickerData[] = [
  {
    label: '関西',
    value: 'kansai',
  },
  {
    label: '関東',
    value: 'kantou',
  },
];

const prefecturesList: PickerData[] = [
  {
    label: '東京都',
    value: 'tokyo',
  },
  {
    label: '神奈川県',
    value: 'kanagawa',
  },
  {
    label: '千葉県',
    value: 'tiba',
  },
];

export const ProfileEditScreen = () => {
  const [userName, setUserName] = useState('永野 芽衣');
  const [userId, setUserId] = useState('@test');
  const [profile, setProfile] = useState(
    'プロフィール文。以下150文字。６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０',
  );
  const [userYouTube, setUserYouTube] = useState('https://www.youtube.com/');
  const [userInstagram, setUserInstagram] = useState('https://www.instagram.com/');
  const [userTwitter, setUserTwitter] = useState('https://twitter.com/');
  const [userFaceBook, setUserFaceBook] = useState('https://ja-jp.facebook.com/');
  const [userWeb, setUserWeb] = useState('https://qiita.com/');

  // 使用していないがRNPickerSelectでは定義が必須のため暫定で記述
  /* eslint-disable no-unused-vars */
  const [area, setArea] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.profileBackImage}>
          <Image style={styles.profileBackImage} resizeMode="stretch" source={backImages} />
          <View style={styles.backIcon}>
            <Icon name="camera" size={12} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image style={styles.profileImage} resizeMode="contain" source={profileImages} />
          <View style={styles.profileIcon}>
            <Icon name="camera" size={12} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={styles.profileEditContainer}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView style={styles.editUserProfile}>
          <View style={styles.editContainer}>
            <Text style={styles.text}>{constant.label.name}</Text>
            <TextInput
              style={styles.inputtext}
              value={userName}
              onChangeText={(text) => {
                setUserName(text);
              }}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="done"
            />
          </View>
          <View style={styles.editContainer}>
            <Text style={styles.text}>{constant.label.id}</Text>
            <TextInput
              style={styles.inputtext}
              value={userId}
              onChangeText={(text) => {
                setUserId(text);
              }}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="done"
            />
          </View>
          <View style={styles.editAreaContainer}>
            <View style={styles.editArea}>
              <Text style={styles.text}>{constant.label.area}</Text>
              <RNPickerSelect
                onValueChange={(value) => setArea(value)}
                items={areaList}
                style={pickerSelectStyles}
                placeholder={{ label: constant.message.select, value: '' }}
                Icon={() => (
                  <Icon name="chevron-down" size={15} color="gray" style={styles.pickerIcon} />
                )}
                doneText="完了"
              />
            </View>
            <View style={styles.editArea}>
              <Text style={styles.text}>{constant.label.prefectures}</Text>
              <RNPickerSelect
                onValueChange={(value) => setArea(value)}
                items={prefecturesList}
                style={pickerSelectStyles}
                placeholder={{ label: constant.message.select, value: '' }}
                Icon={() => (
                  <Icon name="chevron-down" size={15} color="gray" style={styles.pickerIcon} />
                )}
                doneText="完了"
              />
            </View>
          </View>
          <View style={styles.editProfileContainer}>
            <Text style={styles.text}>{constant.label.introduction}</Text>
            <TextInput
              multiline
              style={styles.inputProfiletext}
              value={profile}
              onChangeText={(text) => {
                setProfile(text);
              }}
              autoCapitalize="none"
              keyboardType="default"
              blurOnSubmit
              returnKeyType="done"
            />
          </View>
          <View style={styles.editSnsContainer}>
            <Text style={styles.text}>{constant.title.snsTitle}</Text>
            <View style={styles.editSns}>
              <Text style={styles.snsText}>{constant.label.yutube}</Text>
              <TextInput
                style={styles.inputSnstext}
                value={userYouTube}
                onChangeText={(text) => {
                  setUserYouTube(text);
                }}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
            </View>
            <View style={styles.editSns}>
              <Text style={styles.snsText}>{constant.label.twitter}</Text>
              <TextInput
                style={styles.inputSnstext}
                value={userTwitter}
                onChangeText={(text) => {
                  setUserTwitter(text);
                }}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
            </View>
            <View style={styles.editSns}>
              <Text style={styles.snsText}>{constant.label.instagram}</Text>
              <TextInput
                style={styles.inputSnstext}
                value={userInstagram}
                onChangeText={(text) => {
                  setUserInstagram(text);
                }}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
            </View>
            <View style={styles.editSns}>
              <Text style={styles.snsText}>{constant.label.facebook}</Text>
              <TextInput
                style={styles.inputSnstext}
                value={userFaceBook}
                onChangeText={(text) => {
                  setUserFaceBook(text);
                }}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
            </View>
            <View style={styles.editSns}>
              <Text style={styles.snsText}>{constant.label.web}</Text>
              <TextInput
                style={styles.inputSnstext}
                value={userWeb}
                onChangeText={(text) => {
                  setUserWeb(text);
                }}
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 120,
    marginBottom: 15,
    paddingVertical: 35,
    paddingHorizontal: 10,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },

  profileImageContainer: {
    width: 120,
    height: 120,
  },

  profileBackImage: {
    ...StyleSheet.absoluteFillObject,
  },

  backIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    right: 5,
    bottom: 8,
  },

  profileIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },

  icon: {
    color: '#FFFFFF',
  },

  pickerIcon: {
    position: 'absolute',
    right: 18,
    top: 15,
    fontSize: 13,
    color: '#789',
  },

  profileEditContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  editUserProfile: {
    flexDirection: 'column',
    flex: 1,
  },

  editContainer: {
    height: 60,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
  },

  editAreaContainer: {
    height: 70,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },

  editProfileContainer: {
    height: 130,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
  },

  editArea: {
    flex: 1,
  },

  text: {
    fontSize: 14,
    color: '#848484',
    paddingHorizontal: 5,
    marginBottom: 1,
  },

  inputtext: {
    fontSize: 18,
    height: 40,
    paddingHorizontal: 10,
  },

  inputProfiletext: {
    fontSize: 14,
    height: 130,
    paddingHorizontal: 10,
  },

  editSnsContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
  },

  editSns: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  snsText: {
    fontSize: 14,
    color: '#848484',
  },

  inputSnstext: {
    fontSize: 15,
    height: 35,
    paddingHorizontal: 10,
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#789',
    borderRadius: 4,
    width: 150,
    marginLeft: 30,
    marginTop: 3,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 13,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: '#789',
    color: 'black',
    width: 200,
    marginLeft: 15,
    backgroundColor: '#eee',
  },
});
