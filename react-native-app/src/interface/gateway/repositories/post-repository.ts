import firebase from 'firebase';
import { Post } from 'src/domain/models/post';
import { IPostRepository } from 'src/domain/repositories/i-post-repository';

import { translateErrorMessages } from 'src/util/firebase';

export class PostRepositroy implements IPostRepository {
  private className: string;

  constructor() {
    this.className = 'post repository';
  }

  findAll(): Post {
    console.log(`hello ${this.className}`);
    const db = firebase.firestore();
    const ref = db
      .collection('users/JWsX5nWR0bcKGO472gPRCdpEzaE2/memos')
      .orderBy('updatedAt', 'desc');
    ref.onSnapshot((snapshot) => {
      const userMemos: { id: string; bodyText: any; updatedAt: any }[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        userMemos.push({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
      console.log(userMemos);
    });
    return {} as Post;
  }

  save(body: string): void {
    console.log(`body: ${body}!`);
    const db = firebase.firestore();
    const ref = db.collection('users/JWsX5nWR0bcKGO472gPRCdpEzaE2/memos');
    ref
      .add({
        body,
        updatedAt: new Date(),
      })
      .then(() => {
        console.log('success save');
      })
      .catch((error) => {
        const errorMessage = translateErrorMessages(error.code);
        console.log(errorMessage);
      })
      .finally(() => console.log('finally'));
    console.log('finish add post');
  }
}
