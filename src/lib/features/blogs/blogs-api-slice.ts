import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppOrg, Blog, BlogsApiQueryParams } from "../../../types";

export const blogsApiSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: AppOrg.BlogsUrl }),
  endpoints: (build) => ({
    getBlogs: build.query<Blog[], BlogsApiQueryParams>({
      query: ({ page = 1, limit = 10 }) => `?_limit=${limit}&_page=${page}`,
    }),
    getBlog: build.query<Blog, string | undefined>({
      query: (blogId) => `/${blogId}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery } = blogsApiSlice;
