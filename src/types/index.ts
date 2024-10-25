export enum AppOrg {
  BlogsUrl = "https://jsonplaceholder.typicode.com/posts",
}

export enum RoutePath {
  BlogHome = "/",
  BlogDetails = "/details/:blogId",
}

export interface PaginationSliceState {
  page: number;
  limit: number;
}
