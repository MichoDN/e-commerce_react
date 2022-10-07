import { createSlice } from '@reduxjs/toolkit';

export const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState: [false],
    reducers: {
        toggleIsLogged : (state, actions) => actions.payload
    }
})

export const { toggleIsLogged } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
