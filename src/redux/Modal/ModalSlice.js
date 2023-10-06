import { createSlice } from '@reduxjs/toolkit';
import { getAdvertByIdThunk } from 'redux/Advert/advertThunks';

const initialState = {
  isOpen: false,
  currentAdvert: null,
  isLoading: false,
  error: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: state => {
      state.isOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertByIdThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAdvertByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentAdvert = action.payload;
      })
      .addCase(getAdvertByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
