import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        //Put all products array in state
        setProducts: (state, action) => action.payload
    }
})
//Receive all products
export const getProductsThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
        .then(res => dispatch(setProducts(res.data.data.products)))
        .catch(err => console.log(err.response.data.message))
        .finally(() => dispatch(setIsLoading(false)))
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
