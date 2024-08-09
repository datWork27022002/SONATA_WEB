import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        shrinkSidebar: false,
        visibleSidebar: false,
    },
    reducers: {
        updateShrinkSidebar: (state) => {
            state.shrinkSidebar = !state.shrinkSidebar;
        },
        updateVisibleSidebar: (state) => {
            state.visibleSidebar = !state.visibleSidebar;
        },
    },
});

export const { updateShrinkSidebar, updateVisibleSidebar } = themeSlice.actions;

export default themeSlice.reducer;
