import { Post } from 'src/domain/models/post';
/**
 * IPostRepository
 * 投稿に関するCRUD機能を提供します
 */
export interface IPostRepository {
  findAll(): Post;
  save(body: string): void;
}
