import { createSlice } from '@reduxjs/toolkit';
import { getPaginationAdvertThunk } from './advertThunks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const isAlreadyAdded = state.favoriteAdverts?.some(
        advert => advert.id === action.payload.id
      );
      if (!isAlreadyAdded) {
        state.favoriteAdverts?.push(action.payload);
        toast.success('added to favorites');
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteAdverts = state.favoriteAdverts.filter(
        advert => advert.id !== action.payload.id
      );
      toast.info('deleted from favorites');
    },
    LoadMore: state => {
      state.currentPage = state.currentPage + 1;
    },
    addFilteredAdverts: (state, { payload }) => {
      state.adverts = payload;
    },
    removeCurrentPage: state => {
      state.currentPage = 1;
    },
  },

  extraReducers: builder =>
    builder
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
  removeCurrentPage,
} = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
