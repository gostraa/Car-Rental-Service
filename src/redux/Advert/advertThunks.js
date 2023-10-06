import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts, getAdvertsById } from 'services/advertService';

export const getAdvertsThunk = createAsyncThunk(
  'adverts/getAdvertsThunk',
  async rejectWithValue => {
    try {
      const adverts = await getAdverts();
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAdvertByIdThunk = createAsyncThunk(
  'adverts/getAdvertByIdThunk',
  async (id, { rejectWithValue }) => {
    try {
      const advert = await getAdvertsById(id);

      return advert;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
