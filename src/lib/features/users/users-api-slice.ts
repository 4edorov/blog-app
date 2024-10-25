import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppOrg, User } from "../../../types";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: AppOrg.UsersUrl }),
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => "",
    }),
    getUser: build.query<User, number | undefined>({
      query: (userId) => `/${userId}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApiSlice;
