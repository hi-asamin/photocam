import { Post } from 'src/domain/models/post';
import { PostUsecase } from 'src/application/usecases/post-usecase';
import { IPostRepository } from 'src/domain/repositories/i-post-repository';
import { PostRepositroy } from 'src/interface/gateway/repositories/post-repository';

/**
 * 投稿に関する業務を提供する
 * @class PostInteractor
 * @implements PostUsecase
 */
export class PostInteractor implements PostUsecase {
  readonly postRepository: IPostRepository;

  /**
   * @constructor
   * @member PostInteractor
   */
  constructor() {
    this.postRepository = new PostRepositroy();
  }

  /**
   * getAllPosts
   * 投稿一覧を取得する
   * @member PostInteractor
   * @returns {Post[]} posts 投稿一覧
   */
  getAllPosts(): void {
    const posts: Post = this.postRepository.findAll();
    console.log(posts);
  }

  /**
   * addPost
   * 投稿を保存する
   * @param {string} body 投稿内容
   * @member PostInteractor
   */
  addPost(body: string): void {
    console.log('add post');
    this.postRepository.save(body);
  }
}
