import { PostFirebase } from 'src/domain/models/post';
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
  getAllPosts(): PostFirebase[] {
    const posts: PostFirebase[] = this.postRepository.findAll();
    console.log('interactor', JSON.stringify(posts));
    return posts;
  }

  /**
   * savePost
   * 投稿を保存する
   * @param {PostFirebase} body 投稿内容
   * @member PostInteractor
   */
  savePost(content: PostFirebase): void {
    this.postRepository.save(content);
  }
}
