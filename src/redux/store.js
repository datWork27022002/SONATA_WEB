import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeSlice';
const store = configureStore({
    reducer: { theme: themeReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
