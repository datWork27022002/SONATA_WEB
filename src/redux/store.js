import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
import dataStoreReducer from './dataStoreSlice';
const store = configureStore({
    reducer: { theme: themeReducer, dataStore: dataStoreReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
