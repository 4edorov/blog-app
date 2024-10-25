export enum AppOrg {
  BlogsUrl = "https://jsonplaceholder.typicode.com/posts",
  BlogImageUrl = "https://picsum.photos/1500/1500.jpg",
  UsersUrl = "https://jsonplaceholder.typicode.com/users",
}

export enum RoutePath {
  BlogHome = "/",
  BlogDetails = "/details/:blogId",
}

export interface PaginationSliceState {
  page: number;
  limit: number;
}

export interface Blog {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface BlogsApiQueryParams {
  page: number;
  limit?: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
}
