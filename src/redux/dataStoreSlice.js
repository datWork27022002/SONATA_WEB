import { createSlice } from '@reduxjs/toolkit';
const dataStoreSlice = createSlice({
    name: 'dataStore',
    initialState: {
        stores: [],
        selectedStore: {},
        POSs: [{ posName: 'All' }],
        inforUser: {},
    },
    reducers: {
        updateStores: (state, action) => {
            const stores = action.payload.filter((value) => value.StoreCode === state.inforUser.storeID);

            state.stores = stores;
        },
        updateSelectedStore: (state, action) => {
            state.selectedStore = action.payload;
        },
        updatePOSs: (state, action) => {
            state.POSs = [{ posName: 'All' }, ...action.payload];
        },
        updateInforUser: (state, action) => {
            state.inforUser = action.payload;
        },
    },
});

export const { updateStores, updatePOSs, updateInforUser, updateSelectedStore } = dataStoreSlice.actions;

export default dataStoreSlice.reducer;
