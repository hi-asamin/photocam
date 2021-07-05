export interface Post {
  key: string;
  userName: string;
  userId: string;
  userImage: string;
  postArea: string;
  niceCount: string;
  commentCount: string;
  postText: string;
  postTime: string;
  hashTags: string[];
  postImages: { key: string; image: { uri: string } }[];
}
