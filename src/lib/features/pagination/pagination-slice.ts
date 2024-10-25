import { createSlice } from "@reduxjs/toolkit";
import { PaginationSliceState } from "../../../types";

const initialState: PaginationSliceState = {
  page: 1,
  limit: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: (create) => ({
    nextPage: create.reducer((state) => {
      state.page += 1;
    }),
    prevPage: create.reducer((state) => {
      state.page -= 1;
    }),
  }),
  selectors: {
    selectPage: (state) => state.page,
    selectLimit: (state) => state.limit,
  },
});

export const { nextPage, prevPage } = paginationSlice.actions;

export const { selectPage, selectLimit } = paginationSlice.selectors;
