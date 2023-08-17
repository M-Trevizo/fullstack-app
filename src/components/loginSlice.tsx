import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    username: string,
    password: string
}

const initialState = {
    username: '',
    password: ''
} as LoginState;

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    }
});

export default loginSlice.reducer;