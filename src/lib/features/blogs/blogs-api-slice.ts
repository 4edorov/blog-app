import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppOrg } from "../../../types";

export const blogsApiSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: AppOrg.BlogsUrl }),
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (page = 1, limit = 10) => `?_limit=${limit}&_page=${page}`,
    }),
  }),
});

export const { useGetBlogsQuery } = blogsApiSlice;
