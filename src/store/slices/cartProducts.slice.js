import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig'

export const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState: [],
    reducers: {
        setProducts : (state, actions) => actions.payload 
    }
})

//Load product list in cart
export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
        .then(res => dispatch(setProducts(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

//Add product received to cart
export const addProductToCartThunk = (inCartProduct) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post(`https://e-commerce-api.academlo.tech/api/v1/cart`, inCartProduct, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const removeProductFromCart = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${id}`, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const purchaseCart = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(() => dispatch(setProducts([])))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
