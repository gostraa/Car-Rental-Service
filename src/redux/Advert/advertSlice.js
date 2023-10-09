import { createSlice } from '@reduxjs/toolkit';
import { getPaginationAdvertThunk } from './advertThunks';

const initialState = {
  adverts: [],
  favoriteAdverts: [],
  currentPage: 1,
  isFavorite: false,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const isAlreadyAdded = state.favoriteAdverts.some(
        advert => advert.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.favoriteAdverts.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteAdverts = state.favoriteAdverts.filter(
        advert => advert.id !== action.payload.id
      );
    },
    LoadMore: state => {
      state.currentPage = state.currentPage + 1;
    },
    addFilteredAdverts: (state, { payload }) => {
      state.adverts = payload;
    },
  },

  extraReducers: builder =>
    builder
      // .addCase(getAdvertsThunk.pending, state => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.adverts = payload;
      // })
      // .addCase(getAdvertsThunk.rejected, (state, { error }) => {
      //   state.isLoading = false;
      //   state.error = error;
      // })
      .addCase(getPaginationAdvertThunk.pending, (state, { error }) => {
        state.isLoading = true;
        state.error = error;
      })
      .addCase(getPaginationAdvertThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.currentPage === 1) {
          state.adverts = payload;
        } else {
          state.adverts.push(...payload);
        }
      })
      .addCase(getPaginationAdvertThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      }),
});

export const {
  addToFavorite,
  removeFromFavorite,
  LoadMore,
  addFilteredAdverts,
} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
