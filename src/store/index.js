import { configureStore } from '@reduxjs/toolkit'
import cartProductsSlice from './slices/cartProducts.slice'

import categoriesSlice from './slices/categories.slice'
import isLoadingSlice from './slices/isLoading.slice'
import isLoggedSlice from './slices/isLogged.slice'
import productsSlice from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        products : productsSlice,
        categories : categoriesSlice,
        purchases : purchasesSlice,
        isLogged : isLoggedSlice,
        cartProducts : cartProductsSlice
    }
})
