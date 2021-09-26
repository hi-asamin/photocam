import { PostFirebase } from 'src/domain/models/post';

/**
 * PostUsecase
 * 投稿に関する業務
 */
export interface PostUsecase {
  getAllPosts(): PostFirebase[];
  savePost(content: PostFirebase): void;
}
