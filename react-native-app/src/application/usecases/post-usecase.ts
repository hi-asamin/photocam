/**
 * PostUsecase
 * 投稿に関する業務
 */
export interface PostUsecase {
  getAllPosts(): void;
  addPost(body: string): void;
}
