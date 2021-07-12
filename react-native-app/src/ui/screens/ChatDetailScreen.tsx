import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import { IMessage } from '@src/domain/models/imessage';

// 以下を参考に実装
// https://github.com/FaridSafi/react-native-gifted-chat#example

export const ChatDetailScreen = () => {
  const [messages, setMessages] = useState(chatList);

  const onSend = useCallback((message = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, message));
    // メッセージ送信後の配列の中身見たかったらこれ
    // console.log(messages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(text) => onSend(text)}
      user={{
        _id: 'myuser',
        name: '送信者',
        avatar: 'https://placeimg.com/140/140/any',
      }}
      placeholder="テキストを入力してください"
      showAvatarForEveryMessage
    />
  );
};

// チャット表示用データ
// デフォルトでは配列の下から表示される（ソートするから関係ないが...）
const chatList: IMessage[] = [
  {
    _id: '5',
    text: 'ありがとう',
    createdAt: new Date(),
    user: {
      _id: 'myuser',
      name: '相手',
      avatar: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    },
  },
  {
    _id: '4',
    text: '福井くんかっこいい',
    createdAt: new Date(),
    user: {
      _id: 'otheruser',
      name: '相手',
      avatar: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    },
  },
  {
    _id: '3',
    text: 'ちょっと重すぎるので後回しにします',
    createdAt: new Date(),
    user: {
      _id: 'otheruser',
      name: '相手',
      avatar: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    },
  },
  {
    _id: '2',
    text: 'この画面は',
    createdAt: new Date(),
    user: {
      _id: 'otheruser',
      name: '送信者',
      avatar: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    },
  },
  {
    _id: '1',
    text: 'ようこそ',
    createdAt: new Date(),
    user: {
      _id: 'otheruser',
      name: '相手',
      avatar: 'https://i.pinimg.com/736x/10/90/b9/1090b93f4ddc26c5dbafb69c376d99ca.jpg',
    },
  },
];
