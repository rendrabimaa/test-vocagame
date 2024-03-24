import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
    username: string;
    password: string;
    phoneNumber: string;
}

interface RegisterPayload {
    username: string;
    password: string;
    phoneNumber: string;
}

const initialState = {
    username: "",
    password: "",
    phoneNumber: ""
} as InitialState;


export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        // logIn: (state, action: PayloadAction<string>) => {
        //     return {
        //         value: {
        //             isAuth: true,
        //             username: action.payload,
        //             uid: 'io23u5io34u63op5i345u3',
        //             isModerator: false,
        //         }
        //     }
        // },
        saveAction: (state, action: PayloadAction<RegisterPayload>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { logOut, saveAction } = auth.actions;
export default auth.reducer; 