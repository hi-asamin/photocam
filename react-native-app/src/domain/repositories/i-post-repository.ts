import { PostFirebase } from 'src/domain/models/post';
/**
 * IPostRepository
 * 投稿に関するCRUD機能を提供します
 */
export interface IPostRepository {
  findAll(): PostFirebase[];
  save(content: PostFirebase): void;
}
