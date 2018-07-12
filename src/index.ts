import { ServiceResult } from "scuttlespace-api-common";
import { ICategory, IPost } from "scuttlespace-service-pub";

// TODO: for now...
export interface IBookmark {
  id: string;
}

export interface IPubModule {
  getIndex: () => Promise<ServiceResult<IPost[]>>;
  getPost: (id: string) => Promise<ServiceResult<IPost>>;
  getCategories: () => Promise<ServiceResult<ICategory[]>>;
  getCategory: (id: string) => Promise<ServiceResult<ICategory>>;
  getPostsByCategory: (categoryId: string) => Promise<ServiceResult<IPost[]>>;
}

export interface IBookmarkModule {
  getBookmarks: () => Promise<ServiceResult<IBookmark[]>>;
}

export interface ISiteProvider {
  pub: IPubModule;
  bookmark: IBookmarkModule;
}
