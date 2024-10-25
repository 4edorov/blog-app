import { createSlice } from "@reduxjs/toolkit";

const initialState: { isModalOpen: boolean } = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: (create) => ({
    openModal: create.reducer((state) => {
      state.isModalOpen = true;
    }),
    closeModal: create.reducer((state) => {
      state.isModalOpen = false;
    }),
  }),
  selectors: {
    selectIsModalOpen: (state) => state.isModalOpen,
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const { selectIsModalOpen } = modalSlice.selectors;
