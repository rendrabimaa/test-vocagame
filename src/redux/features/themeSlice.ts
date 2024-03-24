import { createSlice } from "@reduxjs/toolkit";



const initialState: { isDarkMode:boolean } = {
    isDarkMode: false
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export const {toggleDarkMode} = darkModeSlice.actions;

export default darkModeSlice.reducer;