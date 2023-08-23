import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type FormState = { 
    username: string,
    password: string
}

const initialState: FormState = {
    username: '',
    password: ''
}

    

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        }
    }
});

export const selectLoginForm = (state: RootState) => state.loginSlice;
export const selectUsername = (state: RootState) => state.loginSlice.username;
export const selectPassword = (state: RootState) => state.loginSlice.password;
export const { setUsername, setPassword } = loginSlice.actions;
export default loginSlice.reducer;