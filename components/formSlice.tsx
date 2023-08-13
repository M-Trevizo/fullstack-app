import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type FormState = { 
    username: string,
    password: string,
    passwordConfirm?: string,
    email?: string
    
}

const initialState: FormState = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: ''
}

    

const formSlice = createSlice({
    name: 'feilds',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            console.log(action.payload);
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

export const selectForm = (state: RootState) => state.formSlice;
export const { setUsername, setPassword, setPasswordConfirm, setEmail } = formSlice.actions;
export default formSlice.reducer;