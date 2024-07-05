import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';
const initialState = JSON.parse(localStorage.getItem('data')) || {
    name: '',
    email: '',
    phoneNo: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zipcode: ''
};
const slice = createSlice({
    name: 'validation', initialState,
    reducers: {
        add: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
            localStorage.setItem('data', JSON.stringify(state));
            console.log(field, value);
        },
       
    }
})
export const { add, update } = slice.actions;
export default slice.reducer;