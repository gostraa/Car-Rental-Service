import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk } from './advertThunks';

const savedFavoriteAdverts =
  JSON.parse(localStorage.getItem('favoriteAdverts')) || [];

const initialState = {
  adverts: [],
  favoriteAdverts: savedFavoriteAdverts,
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
        localStorage.setItem(
          'favoriteAdverts',
          JSON.stringify(state.favoriteAdverts)
        );
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteAdverts = state.favoriteAdverts.filter(
        advert => advert.id !== action.payload.id
      );
      localStorage.setItem(
        'favoriteAdverts',
        JSON.stringify(state.favoriteAdverts)
      );
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getAdvertsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(getAdvertsThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      }),
});

export const { addToFavorite, removeFromFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
