import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { blogsApiSlice } from "./features/blogs/blogs-api-slice";
import { paginationSlice } from "./features/pagination/pagination-slice";

const rootReducer = combineSlices(paginationSlice, blogsApiSlice);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(blogsApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
