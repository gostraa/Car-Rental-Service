import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './Advert/advertSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { modalReducer } from './Modal/ModalSlice';
// import { filterReducer } from './Filter/FilterSlice';

const advertPersistConfig = {
  key: 'favoriteAdverts',
  storage,
  whitelist: ['favoriteAdverts'],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertPersistConfig, advertsReducer),
    modal: modalReducer,
    // filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
