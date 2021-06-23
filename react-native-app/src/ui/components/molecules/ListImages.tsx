import React from 'react';
import {
  StyleSheet, View, ScrollView,
} from 'react-native';

import ListImage from 'src/ui/components/atoms/ListImage';

const styles = StyleSheet.create({
  postList: {
    flex: 1,
  },

  listContainer: {
    paddingHorizontal: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default function ListImages() {
  return (
    <View style={styles.postList}>
      <ScrollView>
        <View style={styles.listContainer}>
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
          <ListImage url="https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg" />
        </View>
      </ScrollView>
    </View>
  );
}

// ！以下flatListで作成しようとしたらめんどくさそうなワーニング出てうまくいかないから保留！

// import React from 'react';
// import {
//   StyleSheet, TouchableOpacity, Image, View, FlatList,
// } from 'react-native';

// const styles = StyleSheet.create({
//   listImage: {
//     width: 137,
//     height: 137,
//   },

//   listContainer: {
//     paddingHorizontal: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

// export default function ListImages() {
//   type props ={
//     imageUrl: string
//   }

//   const imageList: props[] = [
//     {
//       imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
//     },
//     {
//       imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
//     },
//     {
//       imageUrl: 'https://web.goout.jp/wp-content/uploads/2019/08/Z06_0706.jpg',
//     },
//   ];

//   const renderItem = ({ item }) => (
//     <TouchableOpacity>
//       <Image
//         style={styles.listImage}
//         resizeMode="stretch"
//         source={{ uri: item.imageUrl }}
//       />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.listContainer}>
//       <FlatList
//         data={imageList}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }
