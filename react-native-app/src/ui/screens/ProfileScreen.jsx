import * as React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View>
      <View>
        <View>
          <Image
            style={{ width: 66, height: 58 }}
            source={{ uri: 'https://cdn.appllio.com/sites/default/files/styles/article-center/public/field/image/google-new-logo.png?itok=w2Uk7dpd' }}
          />
        </View>
        <View>
          <Text>テスト 太郎</Text>
          <Text>userid</Text>
        </View>
        <View>
          <Text>居住地</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>プロフィール編集ボタン</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <TouchableOpacity>
              <Text>999</Text>
              <Text>投稿数</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>999</Text>
              <Text>フォロー中</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>999</Text>
              <Text>フォロワー</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>プロフィール文。よろしくお願いします。キャンプ大好きです。テストしています。</Text>
        </View>

      </View>
    </View>
  );
}
