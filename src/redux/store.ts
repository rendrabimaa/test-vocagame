import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import darkModeReducer from './features/themeSlice';

export const makeStore = () => configureStore({
    reducer: {
        auth: authReducer,
        theme: darkModeReducer,
    }
});

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']