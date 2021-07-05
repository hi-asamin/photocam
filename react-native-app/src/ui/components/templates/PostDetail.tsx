import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';

import { PostMenuModal } from 'src/ui/components/molecules/PostMenuModal';
import { UserImage } from 'src/ui/components/atoms/UserImage';
import { TextButton } from 'src/ui/components/atoms/TextButton';
// import { useNavigation } from '@react-navigation/native';

import constant from 'src/i18n/ja.json';
import { Post } from 'src/domain/models/post';

export interface Props {
  postList: Post;
}

export const PostDetail = (props: Props) => {
  const { postList } = props;
  const [iconStatus, setIconStatus] = useState(false);
  const [menuModalIsVisible, setMenuModalIsVisible] = useState(false);
  // シェアボタンについては機能検討後に実装とする
  const [shareModalIsVisible, setShareModalIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PostMenuModal isVisible={menuModalIsVisible} setIsVisible={setMenuModalIsVisible} />
      <Modal isVisible={shareModalIsVisible} onBackdropPress={() => setShareModalIsVisible(false)}>
        <View
          style={{
            margin: 20,
            padding: 50,
            backgroundColor: 'white',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FF0000', fontWeight: '700' }}>！機能検討後に実装する！</Text>
        </View>
      </Modal>
      <View style={styles.userInfocontainer}>
        <TouchableOpacity style={styles.userInfocontainer}>
          <UserImage imageUrl={postList.userImage} style={styles.userImage} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{postList.userName}</Text>
          <Text style={styles.userId}>{postList.userId}</Text>
          <Text style={styles.postTime}>{postList.postTime}</Text>
        </View>
        <View style={styles.button}>
          <TextButton buttonText={constant.button.follow} />
        </View>
        <TouchableOpacity style={styles.menuIcon} onPress={() => setMenuModalIsVisible(true)}>
          <IconEntypo name="dots-three-horizontal" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.postImageContainer}>
        <Swiper loop={false}>
          {postList.postImages.map((data) => (
            <Image
              key={data.key}
              style={styles.postImage}
              resizeMode="contain"
              source={data.image}
            />
          ))}
        </Swiper>
      </View>
      <View style={styles.postInfoContainer}>
        <View style={styles.reactionContainer}>
          <TouchableOpacity style={styles.reaction} onPress={() => setIconStatus(!iconStatus)}>
            <IconFeather
              name="heart"
              size={25}
              style={iconStatus ? styles.iconRed : styles.iconBlack}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reaction}>
            <IconFeather name="message-square" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reaction} onPress={() => setShareModalIsVisible(true)}>
            <IconFeather name="share" size={25} />
          </TouchableOpacity>
          <View style={styles.postArea}>
            <IconFeather name="map-pin" size={16} />
            <Text style={styles.areaText}>{postList.postArea}</Text>
          </View>
        </View>
        <View style={styles.reactionContainer}>
          <TouchableOpacity style={styles.reaction}>
            <Text style={styles.reactionText}>
              {constant.label.nice}
              {postList.niceCount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reaction}>
            <Text style={styles.reactionText}>
              {constant.label.comment}
              {postList.commentCount}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.postTextContainer}>
          <Text style={styles.postText}>{postList.postText}</Text>
        </View>
        <View style={styles.postTextContainer}>
          {postList.hashTags.map((data) => (
            <Text key={data} style={styles.hashtagText}>
              {data}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
    borderBottomWidth: 1,
  },

  userInfocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  userInfo: {
    paddingLeft: 5,
    paddingTop: 10,
  },
  userImage: {
    width: 60,
    height: 60,
  },
  menuIcon: {
    marginLeft: 'auto',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userId: {
    fontSize: 14,
  },
  postTime: {
    fontSize: 14,
    color: '#848484',
  },
  button: {
    paddingLeft: 15,
  },

  postImageContainer: {
    // flex: 1,
    width: '100%',
    height: 300,
  },
  postImage: {
    width: '100%',
    height: 300,
  },

  postInfoContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  reactionContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  reaction: {
    marginRight: 20,
  },
  reactionText: {
    fontSize: 15,
    color: '#848484',
  },
  postArea: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  areaText: {
    fontSize: 14,
    fontWeight: '400',
  },
  postTextContainer: {
    marginTop: 5,
  },
  postText: {
    fontSize: 15,
  },
  hashtagText: {
    fontSize: 15,
    color: '#3366FF',
  },

  iconRed: {
    color: 'red',
  },
  iconBlack: {
    color: 'black',
  },
});
