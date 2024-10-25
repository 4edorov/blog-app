import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { blogsApiSlice } from "./features/blogs/blogs-api-slice";
import { paginationSlice } from "./features/pagination/pagination-slice";
import { usersApiSlice } from "./features/users/users-api-slice";

const rootReducer = combineSlices(
  paginationSlice,
  blogsApiSlice,
  usersApiSlice
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(blogsApiSlice.middleware)
      .concat(usersApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
