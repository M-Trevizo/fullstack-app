import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    username: string,
    password: string,
    passwordConfirm?: string,
    email?: string
}

interface Form {
    form: FormState
}

const initialState = {
    form: {
        username: '',
        password: '',
        passwordConfirm: '',
        email: ''
    } as FormState
} as Form
    

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.form.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.form.password = action.payload;
        },
        setPasswordConfirm(state, action: PayloadAction<string>) {
            state.form.passwordConfirm = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.form.email = action.payload;
        }
    }
});

export const selectForm = (state: Form) => state.form;
export const { setUsername, setPassword, setPasswordConfirm, setEmail } = formSlice.actions;
export default formSlice.reducer;