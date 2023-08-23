import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type FormState = { 
    username: string,
    password: string,
    passwordConfirm: string,
    email: string
    
}

const initialState: FormState = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: ''
}

    

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setPasswordConfirm(state, action: PayloadAction<string>) {
            state.passwordConfirm = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        }
    }
});

export const selectRegisterForm = (state: RootState) => state.registerSlice;
export const selectUsername = (state: RootState) => state.registerSlice.username;
export const selectPassword = (state: RootState) => state.registerSlice.password;
export const { setUsername, setPassword, setPasswordConfirm, setEmail } = registerSlice.actions;
export default registerSlice.reducer;