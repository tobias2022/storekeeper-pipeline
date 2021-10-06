import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { storeApi } from './apis/branchApi';
import settingsReducer from './settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
