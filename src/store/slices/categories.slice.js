import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        setCategories: (state, actions) => actions.payload
    }
})
export const getCategoriesThunk = () => dispatch =>{
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
    .then(res => dispatch(setCategories(res.data.data.categories)))
}

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
