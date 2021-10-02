import firebase from 'firebase';
import { QuerySnapshot, DocumentData } from '@firebase/firestore-types';
import { PostFirebase } from 'src/domain/models/post';
import { IPostRepository } from 'src/domain/repositories/i-post-repository';

import { translateErrorMessages } from 'src/util/firebase';

export class PostRepositroy implements IPostRepository {
  private collectionName: string;

  constructor() {
    this.collectionName = 'users/JWsX5nWR0bcKGO472gPRCdpEzaE2/memos';
  }

  findAll(): PostFirebase[] {
    const db = firebase.firestore();
    const ref = db.collection(this.collectionName).orderBy('updatedAt', 'desc');
    const posts: PostFirebase[] = [];
    ref.onSnapshot((snapshot: QuerySnapshot<DocumentData>) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        posts.push({
          userId: data.userId,
          userName: data.userName,
          body: data.body,
          createdAt: data.createdAt.toDate(),
        });
      });
    });
    return posts;
  }

  findByUserId(userId: string): PostFirebase[] {
    const db = firebase.firestore();
    const ref = db.collection(this.collectionName).orderBy('updatedAt', 'desc');
    const posts: PostFirebase[] = [];
    ref.onSnapshot((snapshot: QuerySnapshot<DocumentData>) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.userId === userId) {
          posts.push({
            userId: data.userId,
            userName: data.userName,
            body: data.body,
            createdAt: data.createdAt.toDate(),
          });
        }
      });
    });
    return posts;
  }

  save(content: PostFirebase): void {
    const db = firebase.firestore();
    const ref = db.collection(this.collectionName);
    ref
      .add(content)
      .then(() => {
        console.log('success save');
      })
      .catch((error) => {
        const errorMessage = translateErrorMessages(error.code);
        console.log(errorMessage);
      })
      .finally(() => console.log('finally'));
  }
}
